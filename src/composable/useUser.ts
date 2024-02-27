import { useEffect } from "react";
import { getUser, getWeather } from "../api";
import usersStore from "../store/usersState";
import { User } from "../types/user";
import useCurrentWeather from "./useCurrentWeather";

const useUser = () => {
  const { users, setUser, setUsers } = usersStore();

  const getRandomUser = async () => {
    const response = await getUser();

    const { login, name, gender, email, location, picture } =
      response.data.results[0];

    const { latitude, longitude } = location?.coordinates;

    const { data: weather } = await getWeather(latitude, longitude);

    const { maxTemperature, minTemperature, dayTemperature } =
      useCurrentWeather(weather.hourly);

    const toSave: User = {
      id: login.uuid,
      name: `${name?.title} ${name?.first} ${name?.last}`,
      gender,
      email,
      location: {
        country: location?.country,
        state: location?.state,
        city: location?.city,
        street: `${location?.street?.name}, ${location?.street?.number}`,
      },
      weather: {
        latitude: weather.latitude,
        longitude: weather.longitude,
        windspeed: `${weather.current_weather.windspeed} ${weather.current_weather_units.windspeed}`,
        weathercode: weather.current_weather.weathercode,
        temperature: `${weather.current_weather.temperature} ${weather.current_weather_units.temperature}`,
        maxTemperature: `${maxTemperature} ${weather.hourly_units.temperature_2m}`,
        minTemperature: `${minTemperature} ${weather.hourly_units.temperature_2m}`,
        dayTemperature,
      },
      profilePhotos: picture,
    };

    setUser(toSave);
  };

  const updateWeatherForExistingUser = async (user: User) => {
    const { weather } = user;

    const { latitude, longitude } = weather;

    try {
      const { data: weather } = await getWeather(
        String(latitude),
        String(longitude)
      );
      const { maxTemperature, minTemperature, dayTemperature } =
        useCurrentWeather(weather.hourly);

      const updatedUser = {
        ...user,
        weather: {
          latitude: weather.latitude,
          longitude: weather.longitude,
          windspeed: `${weather.current_weather.windspeed} ${weather.current_weather_units.windspeed}`,
          weathercode: weather.current_weather.weathercode,
          temperature: `${weather.current_weather.temperature} ${weather.current_weather_units.temperature}`,
          maxTemperature: `${maxTemperature} ${weather.hourly_units.temperature_2m}`,
          minTemperature: `${minTemperature} ${weather.hourly_units.temperature_2m}`,
          dayTemperature,
        },
      } as User;

      const newUserList = users
        ? users.map((u: User) => {
            return u.id === updatedUser.id ? updatedUser : u;
          })
        : [];

      setUsers(newUserList);
    } catch (error) {
      console.error("Error updating weather:", error);
    }
  };

  useEffect(() => {
    if (users) {
      const interval = setInterval(() => {
        for (const user of users) {
          updateWeatherForExistingUser(user);
        }
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, [users]);

  return {
    users,
    getUser: getRandomUser,
  };
};

export default useUser;
