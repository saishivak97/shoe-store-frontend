import { CgProfile } from "react-icons/cg";
import { IoIosListBox } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import "./index.css";

function Profile() {
  return (
    
      <div className="profile-main-container">
        <div className="profile-img-mail-name-container">
          <CgProfile className="profile-pic" />
          <div>
            <h1 className="profile-name">Sai Shiva</h1>
            <p className="profile-mail">saishivak97@gmail.com</p>
          </div>
        </div>
        <ul className="profile-list-container">
          <li className="profile-list-item">
            <IoIosListBox />
            <h1 className="profile-list-item">Orders</h1>
          </li>
          <li className="profile-list-item">
            <MdFavoriteBorder/>
            <h1 className="profile-list-item">Favourites</h1>
          </li>
          <li className="profile-list-item">
            <MdBookmarkBorder />
            <h1 className="profile-list-item">Saved</h1>
          </li>
          <li className="profile-list-item">
            <IoMdSettings/>
            <h1 className="profile-list-item">Settings</h1>
          </li>
        </ul>
        <div>
        <buton className="logout-button">LogOut</buton>
        </div>
      </div>
      
    
  );
}

export default Profile;
