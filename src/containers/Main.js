import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";

const Main = ({ theme }) => {
  console.log(theme);
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Main;
