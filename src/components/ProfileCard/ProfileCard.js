import { ProfileWrapper } from "./ProfileCard.styled";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const name = useSelector((state) => state.name);
  const designation = useSelector((state) => state.designation);
  const profileSummary = useSelector((state) => state.profileSummary);

  return (
    <ProfileWrapper className="d-flex justify-content-center flex-column">
      <h2 className="nameWrapper">{name}</h2>
      <h1 className="designationWrapper">{designation}</h1>
      <h3 className="profileSummaryWrapper">{profileSummary}</h3>
    </ProfileWrapper>
  );
};

export default ProfileCard;
