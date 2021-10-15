import { THEMES } from "../constants/theme";
import { LIGHT, DARK, APPLE } from "../themes/";

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.LIGHT:
      return LIGHT;

    case THEMES.DARK:
      return DARK;

    case THEMES.APPLE:
      return APPLE;
    default:
      return LIGHT;
  }
};
