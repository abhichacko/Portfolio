import "./App.css";
import React from "react";
import Landing from "./components/Landing";

import { getTheme } from "./themes/getTheme";
import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";

function App() {
  const themeName = useSelector((state) => state.themeName);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
