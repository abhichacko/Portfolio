import "./App.css";
import React from "react";
import Landing from "./components/Landing";

import { getTheme } from "./themes/getTheme";
import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";

function App() {
  const themeName = useSelector((state) => state.themeName);

  console.log(themeName, "app js");
  console.log(getTheme(themeName), "theme object app");
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
