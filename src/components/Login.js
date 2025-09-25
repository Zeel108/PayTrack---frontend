import '../Styles/CSS/Logincss.css';
import { useNavigate, Link } from "react-router-dom";
import Signup from './Signup';
import UpdatePassword from './UpdatePassword';


const Login = () => {

    const navigate = useNavigate();

    const save = () => {
        navigate(`/users`)
    }
    
    return (
    <div className="login-container">
      <h1 className="app-name">PayTrack</h1>
      <div className="login-card">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="bottom-links" style={{gap:"12px", display:"flex",justifyContent:"center"}}>
                    <Link to="/signup">New to company?</Link>
                    <Link to="/forgetpass">Forget Password?</Link>
                </div>
      </div>
    </div>
  );
};

export default Login;