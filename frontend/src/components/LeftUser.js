import React from "react";
import "../componentStyles/LeftUser.css";

const LeftUser = ({ userImage, name, jobTitle, message }) => {
  return (
    <div className="userLeftSide">
      <img src={userImage} alt="img" />
      <div className="userDetails">
        <p className="userMessage">{message}</p>
        <p className="userName">{name}</p>
        <p className="userJobTitle">{jobTitle}</p>
      </div>
    </div>
  );
};

export default LeftUser;
