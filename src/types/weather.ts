export interface WeatherInfo {
  latitude: number;
  longitude: number;
  windspeed: string;
  weathercode: number;
  temperature: string;
  maxTemperature: string;
  minTemperature: string;
  dayTemperature: HourlyTemperature[];
}

export interface HourlyTemperature {
  time: string;
  temperature: number;
}
