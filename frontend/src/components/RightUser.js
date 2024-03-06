import React from "react";
import "../componentStyles/RightUser.css";

const RightUser = ({ userImage, name, jobTitle, message }) => {
  return (
    <div className="userRightSide">
      <img src={userImage} alt="img" />
      <div className="userDetails">
        <p className="userMessage">{message}</p>
        <p className="userName">{name}</p>
        <p className="userJobTitle">{jobTitle}</p>
      </div>
    </div>
  );
};

export default RightUser;
