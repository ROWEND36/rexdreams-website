import { Typography } from "@material-ui/core";
import { useUser } from "../../Components/Firebase";
import App from "../App/App";
export const UserPage = () => {
  const user = useUser();
  console.log(user);
  return (
    <App>
      <Typography variant="h3">Welcome</Typography>
    </App>
  );
};
export default UserPage;
