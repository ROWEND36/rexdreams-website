import { Switch, Route } from "react-router-dom";
import Introduction from "../Screens/Introduction";
import App from "../App";
import About from "../Screens/About";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Introduction} />
      <Route path="/App" exact strict component={App} />
      <Route path="/About" exact strict component={About} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={App} />
    </Switch>
  );
};
export default Routes;
