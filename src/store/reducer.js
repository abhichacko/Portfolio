import ACTION_TYPES from "../constants/actionTypes";

const initialState = {
  themeName: "",
  name: "Abhilash Thankachan",
  designation: "Front End Developer",
  profileSummary: `Enthusiastic web developer with over 2 years of front end development experience and passion for
  responsive website design. Enjoys research and building innovative applications to the needs of the
  business.`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
