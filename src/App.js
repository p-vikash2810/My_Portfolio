import "./App.css";
import Main from "./containers/Main";
import { setCurrentTheme } from "./redux/theme/theme.action";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ currentTheme }) {
  useEffect(() => {
    currentTheme("brownTheme");
  }, [currentTheme]);

  return (
    <>
      <div>
        <Main />
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  currentTheme: (theme) => dispatch(setCurrentTheme(theme)),
});

export default connect(null, mapDispatchToProps)(App);
