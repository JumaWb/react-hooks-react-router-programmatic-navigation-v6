import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar({Logout}) {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <button onclick={Logout}>Logout</button>
    </nav>
  );
}

export default NavBar;
