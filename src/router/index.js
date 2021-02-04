import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./webRoutes";

import Nav from "../common/Nav";

import NotFound from "../views/NotFound";
import Home from "../views/Home";
import State from "../views/State";

const Routing = () => {
  return (
    <Router>
      <Nav/>
      <div>
        <Switch>
          <Route exact path={routes.STATE}>
            <State />
          </Route>
          <Route exact path={routes.STATE_NULL}>
            <Home />
          </Route>
          <Route exact path={routes.HOME}>
            <Home />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Routing;




