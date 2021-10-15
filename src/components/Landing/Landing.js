import React from "react";
import { useSelector } from "react-redux";
import { THEMES } from "../../constants/theme";
import { changeTheme } from "../../actions/themeActions";
import { BodyWrapper } from "./Landing.styled";
import NavBar from "../NavBar/NavBar";

const Landing = (props) => {
  const themeName = useSelector((state) => state.themeName);
  console.log(props.theme);
  const changeThemeName = (e) => {
    changeTheme(e.target.value);
  };

  return (
    <BodyWrapper>
      <NavBar></NavBar>
      <h1>selected theme name {themeName}</h1>
      <select onChange={changeThemeName}>
        <option value={THEMES.LIGHT}>Light</option>
        <option value={THEMES.DARK}>Dark</option>
        <option value={THEMES.APPLE}>Apple</option>
      </select>
    </BodyWrapper>
  );
};

export default Landing;
