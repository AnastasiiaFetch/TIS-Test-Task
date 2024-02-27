import { useMemo } from "react";
import useUser from "../../composable/useUser";
import { PageWrapper } from "../../style";
import Card from "../../components/card/Card";

const FavoritePage = () => {
  const { users } = useUser();
  const savedUserIds = JSON.parse(localStorage.getItem("savedUsers") || "[]");

  const savedUsers = useMemo(() => {
    return users
      ? users.filter((user) => savedUserIds.includes(user.id))
      : null;
  }, [savedUserIds]);

  return (
    <PageWrapper>
      {savedUsers?.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </PageWrapper>
  );
};

export default FavoritePage;
