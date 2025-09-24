import '../Styles/CSS/Logincss.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const save = () => {
        navigate(`/users`)
    }

    return (
        <div className="login-container signup-container">
            <h1 className="app-name">PayTrack</h1>
            <div className="login-card signup-card">
                <form className="employee-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" placeholder="Enter First Name" required />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Enter Last Name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" placeholder="Enter Age" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="number" placeholder="Enter Phone Number" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Position:</label>
                            <input type="text" placeholder="Enter Position" required />
                        </div>
                        <div className="form-group">
                            <label>Department:</label>
                            <input type="text" placeholder="Enter Department" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Office ID:</label>
                            <input type="number" placeholder="Enter Office ID" required />
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input type="number" placeholder="Enter Salary" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" placeholder="Enter Password" required />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

                <div className="bottom-links">
                    <a href="#">Signup</a>
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;