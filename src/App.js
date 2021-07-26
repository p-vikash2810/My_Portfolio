import { ThemeProvider } from "styled-components";
import "./App.css";
import { chosenTheme } from "./theme";
import { GlobalStyle } from "./globalStyle";
import Main from "./containers/Main";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyle />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
