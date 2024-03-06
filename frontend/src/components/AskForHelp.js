import React from "react";
import { Link } from "react-router-dom";
import "../componentStyles/AskForHelp.css";

const AskForHelp = () => {
  return (
    <div className="contactForHelpContainer">
      <div className="contactForHelp">
        <p className="helpHeading">Need help in choosing the right plants?</p>
        <div className="linkForHelp">
          <i className="fas fa-phone"></i>
          <Link className="helpLink" to="/">
            ask for help
          </Link>
        </div>
      </div>
      <div className="contactForHelpDescription">
        <p className="firstPara">
          Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
          primis eget maecenas sedurna malesuada consectetuer.
        </p>
        <p className="secondPara">
          Ornare integer commodo mauris et ligula purus, praesent cubilia
          laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
          fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
          tempor quis, turpis luctus dolor sapien vivamus.
        </p>
      </div>
    </div>
  );
};

export default AskForHelp;
