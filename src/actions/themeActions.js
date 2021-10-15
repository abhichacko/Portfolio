import ACTION_TYPES from "../constants/actionTypes";
import store from "../store/store";

const { dispatch } = store;

export const changeTheme = (themeName) => {
  const payload = {
    themeName: themeName,
  };
  dispatch({ type: ACTION_TYPES.THEME_CHANGE, payload: payload });
};
