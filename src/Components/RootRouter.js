import { Switch, Route } from "react-router-dom";
import Introduction from "../Screens/Introduction";
import App from "../App";

const RootRouter = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Introduction} />
      <Route path="/App" exact strict component={App} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={App} />
    </Switch>
  );
};
export default RootRouter;
