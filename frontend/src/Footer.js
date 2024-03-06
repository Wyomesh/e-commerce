import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Seperator from "./components/Seperator";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="preFooter">
        <div className="social">
          <img
            className="footerLogo"
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
            alt="site-title"
          />
          <p className="footerSiteName">simply natural</p>
          <div className="socialLinkContainer">
            <Link className="socialLink" to="/">
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link className="socialLink" to="/">
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link className="socialLink" to="/">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link className="socialLink" to="/">
              <i class="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
        <div className="quickLinksDiv">
          <p className="quickLinkHeading">quick links</p>
          <div className="quickLinksContainer">
            <Link className="quickLink" to="/">
              introduction
            </Link>
            <Link className="quickLink" to="/">
              know more about us
            </Link>
            <Link className="quickLink" to="/">
              visit store
            </Link>
            <Link className="quickLink" to="/">
              let's connect
            </Link>
          </div>
        </div>
        <div className="importantLinksDiv">
          <p className="importantLinkHeading">important links</p>
          <div className="importantLinksContainer">
            <Link className="importantLink" to="/">privacy policy</Link>
            <Link className="importantLink" to="/">shipping details</Link>
            <Link className="importantLink" to="/">terms & conditions</Link>
            <Link className="importantLink" to="/">media kit</Link>
          </div>
        </div>
        <div className="getInTouch">
          <p className="getInTouchHeading">Get In Touch With Us For The Best Quality Plants & Succulents</p>
          <p className="getInTouchPara">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
      </div>
      <Seperator />
      <div className="copyright">
        <p className="copyrightPara">Copyright &copy; 2024 Simply Natural</p>
        <p className="poweredPara">Powered by Simply Natural</p>
      </div>
    </div>
  );
};

export default Footer;
