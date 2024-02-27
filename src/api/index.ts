import axios from "axios";

export const getUser = () => axios.get("https://randomuser.me/api/");
export const getWeather = (latitude: string, longitude: string) => {
  return axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
  );
};
