import { HourlyTemperature } from "../types/weather";

interface CurrentWeatherProps {
  temperature_2m: number[];
  time: string[];
}

const useCurrentWeather = (hourly: CurrentWeatherProps) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const filteredData = hourly.temperature_2m
    .map((temperature, index) => {
      const dateTime = new Date(hourly.time[index]);
      const date = dateTime.toISOString().split("T")[0];

      if (date === currentDate) {
        return {
          time: dateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature: temperature,
        };
      }

      return null;
    })
    .filter((data) => data !== null) as HourlyTemperature[];

  const maxTemperature = Math.max(
    ...filteredData.map((data) => data.temperature)
  );
  const minTemperature = Math.min(
    ...filteredData.map((data) => data.temperature)
  );

  return { maxTemperature, minTemperature, dayTemperature: filteredData };
};

export default useCurrentWeather;
