import '../Styles/CSS/Logincss.css';
import { useNavigate, Link } from "react-router-dom";
import UserService from '../services/UserService';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const checkuser = (e) => {
    e.preventDefault();
    const user = { email, password }
    UserService.checkUser(user)
      .then(response => {
        setMessage(response.data.message); // "Login successful"
        localStorage.setItem("userdata", JSON.stringify(response.data.user_data));
            console.log("Saved user:", JSON.parse(localStorage.getItem("userdata")));

        if (response.data.role === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/home");
        }
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.detail) {
        const detail = error.response.data.detail;

        // If detail is an array (from Pydantic), join messages
        if (Array.isArray(detail)) {
            const messages = detail.map(d => d.msg || JSON.stringify(d)).join(", ");
            setMessage(messages);
        } else if (typeof detail === "string") {
            setMessage(detail);
        } else {
            setMessage(JSON.stringify(detail));
        }
    } else {
        setMessage("Something went wrong");
    }
      })
  }

  return (
    <div className="login-container">
      <h1 className="app-name">PayTrack</h1>
      <div className="login-card">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email"
              value={email}
              onChange={((e) => setEmail(e.target.value))}
              required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password"
              value={password}
              onChange={((e) => setPassword(e.target.value))}
              required />
          </div>
          <button type="submit" className="login-btn" onClick={(e) => checkuser(e)}>Login</button>
        </form>
        {message && <p style={{ color: "red" }}>{message}</p>}

        <div className="bottom-links" style={{ gap: "12px", display: "flex", justifyContent: "center" }}>
          <Link to="/signup">New to company?</Link>
          <Link to="/forgetpass">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;