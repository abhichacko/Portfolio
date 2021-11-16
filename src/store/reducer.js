import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

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
  emailId: "itsmeabhilashthankachan@gmail.com",
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
      companyName: "Infosys Limited",
      year: "10/2021-present",
      location: "Bengaluru, India",
      details: `Worked on UI development for a dashboard for Business Administrators using React JS. Different functionalities including creating, modifying and displaying entities such as Authorities, Parents & Groups, and creation of new Admin users. Managed design, functional approach for UI delivery and worked on major severity issues. Created complex UI designs using class-based and functional components. \nTechnology Used : React JS, Redux, SASS, Styled-Components,react-bootstrap, axios`,
    },
    {
      designation: "Systems Engineer",
      companyName: "Infosys Limited",
      year: "10/2019-09/2021",
      location: "Bengaluru, India",
      details:
        "Worked on the design of micro-service authentication architecture for both internal and public endpoints. Created demo micro-services showcasing different functionalities in Java Spring Boot and deployed it in Azure Spring Cloud. Exposed APIs using Azure API Management. \nTechnology Used : Azure Spring Cloud, Azure API Management, Java Spring Boot",
    },
  ],
  projects: [
    {
      projectName: "Covid Battle",
      techStack: [
        "react js",
        "react-redux",
        "styled-components",
        "react-bootstrap",
        "material-ui",
        "react-chartjs-2",
        "axios",
      ],
      imageUrl: projectImages.covidAppImage,
      visitLink: "https://abhichacko.github.io/Corona-Live-App/#/",
      codeLink: "https://github.com/abhichacko/Corona-Live-App",
      description:
        "A responsive (SPA) dashboard created using React JS which displays the covid-19 related data of our country.",
    },
    {
      projectName: "Music Player",
      techStack: ["html", "css", "javascript"],
      imageUrl: projectImages.musicPlayerImage,
      visitLink: "https://abhichacko.github.io/MusicPlayer/",
      codeLink: "https://github.com/abhichacko/MusicPlayer",
      description:
        "A responsive music player which supports both desktop and mobile view",
    },
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
