import Button from "../../elements/button/Button";
import { ModalBackground, ModalBody, ModalWrapper } from "../../style";
import { WeatherInfo } from "../../types/weather";

interface WeatherModalProps {
  onClose: () => void;
  data: WeatherInfo;
}

const WeatherModal: React.FC<WeatherModalProps> = ({ onClose, data }) => {
  return (
    <ModalBackground>
      <ModalWrapper>
        <Button text={"X"} onClick={onClose} />
        <ModalBody>
          <div>
            <div>
              <span>Latitude:</span>
              <span>{data.latitude}</span>
            </div>
            <div>
              <span>Longitude:</span>
              <span>{data.longitude}</span>
            </div>
            <div>
              <span>Temperature:</span>
              <span>{data.temperature}</span>
            </div>
            <div>
              <span>Max. temperature:</span>
              <span>{data.maxTemperature}</span>
            </div>
            <div>
              <span>Min. temperature:</span>
              <span>{data.minTemperature}</span>
            </div>
            <div>
              <span>Wind speed:</span>
              <span>{data.windspeed}</span>
            </div>
          </div>
          <div>
            {data.dayTemperature.map((item, index) => {
              return (
                <div key={`${item.temperature}-${index}`}>
                  <div>Time: {item.time}</div>
                  <div>Temperature: {item.temperature}</div>
                </div>
              );
            })}
          </div>
        </ModalBody>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default WeatherModal;
