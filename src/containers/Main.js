import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Header from "../components/header/header";
import EducationComponent from "../pages/education/EducationComponent";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/ContactComponent";
import { connect } from "react-redux";
import { GlobalStyle } from "../globalStyle";
import { ThemeProvider } from "styled-components";

const Main = ({ theme }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

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
              render={(props) => (
                <EducationComponent {...props} theme={theme} />
              )}
            />

            <Route
              path="/projects"
              render={(props) => <Projects {...props} theme={theme} />}
            />

            <Route
              path="/contact"
              render={(props) => <Contact {...props} theme={theme} />}
            />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.currentTheme,
});

export default connect(mapStateToProps)(Main);
