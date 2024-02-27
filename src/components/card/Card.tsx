import { useEffect, useState } from "react";
import { weatherIcons } from "../../assets/weather_icon_data";
import Button from "../../elements/button/Button";
import { CardButtons, CardPhoto, CardWrapper, WeatherBar } from "../../style";
import { User } from "../../types/user";
import WeatherModal from "../common/WeatherModal";

const Card: React.FC<User> = ({
  id,
  name,
  email,
  gender,
  profilePhotos,
  location,
  weather,
}) => {
  const [isUserSaved, setIsUserSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsUserSaved(() => {
      const savedUsers = JSON.parse(localStorage.getItem("savedUsers") || "[]");
      return savedUsers.includes(id);
    });
  }, [id]);

  const saveToLocalStorage = () => {
    setIsUserSaved(true);
    localStorage.setItem(
      "savedUsers",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("savedUsers") || "[]"),
        id,
      ])
    );
  };

  const deleteFromLocalStorage = () => {
    setIsUserSaved(false);
    localStorage.setItem(
      "savedUsers",
      JSON.stringify(
        JSON.parse(localStorage.getItem("savedUsers") || "[]").filter(
          (savedUserId: string) => savedUserId !== id
        )
      )
    );
  };

  const WeatherIcon = weatherIcons[weather?.weathercode as number];

  return (
    <CardWrapper>
      <CardPhoto $src={profilePhotos} />
      <div>
        <span>Name:</span> {name}
      </div>
      <div>
        <span>Email:</span> {email}
      </div>
      <div>
        <span>Gender:</span> {gender}
      </div>
      <div>
        <span>Location:</span> {location?.country}, {location?.city},{" "}
        {location?.street}
      </div>
      <div>
        <span>Weather:</span>
        <WeatherBar>
          <div>
            <div>
              <span>Temperature:</span>
              <span>{weather.temperature}</span>
            </div>
            <div>
              <span>Max. temperature:</span>
              <span>{weather.maxTemperature}</span>
            </div>
            <div>
              <span>Min. temperature:</span>
              <span>{weather.minTemperature}</span>
            </div>
          </div>
          <div>
            <WeatherIcon size="35" />
          </div>
        </WeatherBar>
      </div>
      <CardButtons>
        <Button
          text={isUserSaved ? "Delete" : "Save"}
          onClick={isUserSaved ? deleteFromLocalStorage : saveToLocalStorage}
        />

        <Button
          text={"Weather"}
          onClick={() => setIsModalOpen(true)}
          $color={"#7692FF"}
          $borderColor={"#476CFF"}
        />
      </CardButtons>
      {isModalOpen && (
        <WeatherModal data={weather} onClose={() => setIsModalOpen(false)} />
      )}
    </CardWrapper>
  );
};

export default Card;
