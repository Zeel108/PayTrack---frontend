import '../Styles/CSS/Navbar.css'
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return ( 
        <div>
            <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/home" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/addexpense" className={({ isActive }) => (isActive ? "active" : "")}>
            Add Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/viewexpense" className={({ isActive }) => (isActive ? "active" : "")}>
            View Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
        </div>
     );
}
 
export default NavBar;