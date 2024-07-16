import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Profile from "../Profile";

import "./index.css";

const SideBarItems = ["Home", "Shop", "About", "contact", "Cart"];

function SideBar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-inner-container">
        <img className="side-bar-logo" src="./images/logo.jpeg" alt="logo" />

        <hr className="horizontal-line" />

        <div>
          <ul>
            {SideBarItems.map((eachItem) => (
              <li className="side-bar-items">
                <h1>{eachItem}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="icons-profile-main-container">
        <div>
          <h1 className="social-media-title">Social Media</h1>
          <div className="icons-container">
            <FaInstagramSquare className="side-bar-icons" />
            <FaLinkedin className="side-bar-icons" />
            <FaGithubSquare className="side-bar-icons" />
            <FaYoutubeSquare className="side-bar-icons" />
            <FaSquareXTwitter className="side-bar-icons" />
            <FaFacebookSquare className="side-bar-icons" />
          </div>
        </div>

        <Profile />
      </div>
    </div>
  );
}

export default SideBar;
