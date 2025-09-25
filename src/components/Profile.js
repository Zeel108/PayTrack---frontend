import { useEffect, useState } from 'react';
import '../Styles/CSS/profile.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate(`/login`);
    }

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("userdata");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // convert string back to object
    }
  }, []);

  if (!user) {
    return <h2 className='bottom-link'>No user data found. Please<Link to={"/login"} >login</Link> first.</h2>;
  }



    return ( 

        // UserProfile.js
    <div className="profile-container">
      <div className="profile-card">
        <h1>Profile</h1>
        <h2>User Profile</h2>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Department:</strong> {user.departmentName}</p>
        <p><strong>Position:</strong> {user.positionName}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <Link to={"/login"}> login</Link>
        <button type="submit" className="login-btn" onClick={logout}>Logout</button>
        
      </div>
    </div>

     );
}
 
export default Profile;