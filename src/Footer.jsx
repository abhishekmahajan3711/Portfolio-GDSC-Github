import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./css_modules/FooterPageStyles.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-section">
      <footer className="footer">
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/abhishek-mahajan-8a5a91252/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/abhishekmahajan3000/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/abhishekmahajan3711"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/mahajan_abhiM"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Abhishek Mahajan</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
