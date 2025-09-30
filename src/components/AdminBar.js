import '../Styles/CSS/Navbar.css'
import { NavLink } from "react-router-dom";

const AdminBar = () => {
    return ( 
        <div>
            <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/admin/dashboard" end className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addexpense" end className={({ isActive }) => (isActive ? "active" : "")}>
            Add Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/viewexpense" end className={({ isActive }) => (isActive ? "active" : "")}>
            View Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/listuser" className={({ isActive }) => (isActive ? "active" : "")}>
            User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/adduser" className={({ isActive }) => (isActive ? "active" : "")}>
            Add User
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
        </div>
     );
}
 
export default AdminBar;