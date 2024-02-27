import useUser from "../../composable/useUser";
import Button from "../../elements/button/Button";
import { PageWrapper } from "../../style";
import Card from "../../components/card/Card";

const MainPage = () => {
  const { users, getUser } = useUser();

  return (
    <PageWrapper>
      {users?.map((user) => (
        <Card key={user.id} {...user} />
      ))}
      <Button text={"Add user"} onClick={getUser} />
    </PageWrapper>
  );
};

export default MainPage;
