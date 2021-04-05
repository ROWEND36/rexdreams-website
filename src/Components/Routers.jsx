import { Switch, Route } from "react-router-dom";
import Introduction from '../Screens/Introduction';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';
import Pricing from '../Screens/Pricing';
import Invest from '../Screens/Invest';

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Introduction} />
      <Route path="/Home" exact strict component={Home} />
      <Route path="/Chat" exact strict component={Chat} isPrivate />
      <Route path="/Invest" exact strict component={Invest} />
      <Route path="/Pricing" exact strict component={Pricing} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
};
export default Routers;