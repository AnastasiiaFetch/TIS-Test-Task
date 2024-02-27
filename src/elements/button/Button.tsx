import { CustomButton } from "../../style";

interface ButtonProps {
  text: string;
  onClick: () => void;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  onClick = () => {},
  ...rest
}) => {
  return (
    <CustomButton onClick={onClick} {...rest}>
      {text}
    </CustomButton>
  );
};

export default Button;
