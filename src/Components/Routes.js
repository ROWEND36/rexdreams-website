import { Switch, Route } from "react-router-dom";
import Introduction from "../Screens/Introduction";
import Home from "../Screens/Home/Home";
import About from "../Screens/About";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Introduction} />
      <Route path="/Home" exact strict component={Home} />
      <Route path="/About" exact strict component={About} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
};
export default Routes;
