import { Location } from "./location";
import { Pictures } from "./picture";
import { WeatherInfo } from "./weather";

export interface User {
  id: string;
  name: string;
  gender: string;
  email: string;
  location: Location;
  profilePhotos: Pictures;
  weather: WeatherInfo;
}
