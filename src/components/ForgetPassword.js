import '../Styles/CSS/Logincss.css';
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {

    const navigate = useNavigate();

    const GotoLogin = () => {
        navigate(`/login`);
    }

    const SendOtp = () => {
        navigate(`/updatepass`);
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
          <button type="submit" className="login-btn" onClick={SendOtp}>Send OTP</button>
        </form>
        <div className="bottom-links">
          <a onClick={GotoLogin}>Remember Password !!  Goto Login</a>
        </div>
      </div>
    </div>
  );
}
 
export default ForgetPassword;