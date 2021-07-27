import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Header from "../components/header/header";
import EducationComponent from "../pages/education/EducationComponent";
import Projects from "../pages/projects/Projects";

const Main = ({ theme }) => {
  console.log(theme);
  return (
    <div>
      <HashRouter basename="/">
        <Header theme={theme} />

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />

          <Route
            path="/education"
            exact
            render={(props) => <EducationComponent {...props} theme={theme} />}
          />

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Main;
