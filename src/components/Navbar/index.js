import { FaSearch } from "react-icons/fa";
import "./index.css";

const NavBarItems = ["HomePage", "Shop", "About", "contact", "Cart"];

function Navbar() {
  return (
    <div className="navbar-section">
      <ul className="navbar-container">
        {NavBarItems.map((eachItem) => (
          <li className="navbar-items">
            <h1 className="nav-items">{eachItem}</h1>
          </li>
        ))}
      </ul>
      <div className="search-bar-button-container">
        <div className="search-bar-container">
          <input className="search-bars" type="search" placeholder="search" />
        <FaSearch />
        </div>
        <div>
          <button className="navbar-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
