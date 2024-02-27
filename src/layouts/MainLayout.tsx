import { Outlet } from "react-router-dom";
import { FlexLayout } from "../style";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <FlexLayout>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default MainLayout;
