import { Link, useLocation } from "react-router-dom";
import { HeaderWrapper } from "../../style";

const Header = () => {
  const location = useLocation();
  const isMain = location.pathname.includes("/main");
  return (
    <HeaderWrapper>
      <Link
        to={"/main"}
        style={{
          borderBottomColor: isMain ? "#000000a6" : "transparent",
        }}
      >
        Main
      </Link>
      <Link
        to={"/favorite"}
        style={{
          borderBottomColor: isMain ? "transparent" : "#000000a6",
        }}
      >
        Favorite
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
