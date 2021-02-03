import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./webRoutes";

import NotFound from "../views/NotFound";
import Home from "../views/Home";

const Routing = () => {
  return (
    <Router>
      <div>
        <Switch>
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




