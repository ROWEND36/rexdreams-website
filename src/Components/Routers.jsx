import { Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Chat from "../Screens/Chat";
import About from "../Screens/About";
import Invest from "../Screens/Invest";

const Routers = () => {
  return (
    <Switch>
      {/* <Route path="/" exact strict component={Introduction} /> */}
      <Route path="/Home" exact strict component={Home} />
      <Route path="/Chat" exact strict component={Chat} isPrivate />
      <Route path="/Invest" exact strict component={Invest} />
      <Route path="/About" exact strict component={About} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
};
export default Routers;
