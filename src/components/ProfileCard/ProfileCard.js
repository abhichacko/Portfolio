import { ProfileWrapper } from "./ProfileCard.styled";
import { useSelector } from "react-redux";
import avatar from "../../assets/abhilash.jpg";

const ProfileCard = () => {
  const name = useSelector((state) => state.name);
  const designation = useSelector((state) => state.designation);
  const profileSummary = useSelector((state) => state.profileSummary);

  return (
    <ProfileWrapper id="portfolio">
      <div className="d-flex flex-column-reverse align-items-center flex-lg-row align-items-lg-center">
        <img
          src={avatar}
          alt="Ariful Alam"
          className="rounded-circle z-depth-2"
        />
        <div className="d-flex justify-content-center flex-column">
          <h2 className="nameWrapper">{name}</h2>
          <h1 className="designationWrapper">{designation}</h1>
        </div>
      </div>
      <h5 className="profileSummaryWrapper">{profileSummary}</h5>
    </ProfileWrapper>
  );
};

export default ProfileCard;
