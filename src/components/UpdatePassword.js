import { useNavigate } from 'react-router-dom';
import '../Styles/CSS/Logincss.css';

const UpdatePassword = () => {

    const navigate = useNavigate();

    const ChangePassword = () => {
        navigate('/login');
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
            <label>OTP</label>
            <input type="number" placeholder="Enter otp" required />
          </div>
         {/* <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>   */}
          <div className="form-group">
            <label>New Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="login-btn" onClick={ChangePassword}>Update Password</button>
        </form>
      </div>
    </div>
  );
}
 
export default UpdatePassword;