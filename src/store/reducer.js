import ACTION_TYPES from "../constants/actionTypes";

const initialState = {
  themeName: "",
  name: "Abhilash Thankachan",
  designation: "Front End Developer",
  profileSummary: `Enthusiastic web developer with over 2 years of front end development experience and passion for
  responsive website design. Enjoys research and building innovative applications to the needs of the
  business.`,
  twitter: "https://twitter.com/AbhiChacko96",
  linkedin: "https://www.linkedin.com/in/abhilash-thankachan-43b888162/",
  instagram: "https://www.instagram.com/itsmeabhi_z/",
  github: "https://github.com/abhichacko",
  educationDetails: [
    {
      educationName: "Master of Computer Applications",
      collegeName: "College of Engineering Trivandrum",
      year: "2016-2019",
      location: "Trivandrum, Kerala",
      details: `Graduated with a 8.85 GPA from APJ Abdul Kalam Technological University, Kerala`,
    },
    {
      educationName: "Bachelor of Computer Applications",
      collegeName: "Baselious Poulose II Catholicos College",
      year: "2013-2016",
      location: "Piravom, Kerala",
      details: `Graduated with a 8.72 GPA from Mahatma Gandhi University, Kottayam`,
    },
    {
      educationName: "Higher Secondary Education",
      collegeName: "ST George's Higher Secondary School",
      year: "2011-2013",
      location: "Kothamangalam, Kerala",
      details: `Passed with a 86% from Board of Higher Secondary Education, Kerala`,
    },
    {
      educationName: "High School Education",
      collegeName: "ST George's Higher Secondary School",
      year: "2010-2011",
      location: "Kothamangalam, Kerala",
      details: `Passed with a 95% from Board of Board of Public Examination, Kerala`,
    },
  ],
  workExperience: [
    {
      designation: "Senior Systems Engineer",
      year: "2020-present",
      location: "Bengaluru, India",
    },
    {},
  ],
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
