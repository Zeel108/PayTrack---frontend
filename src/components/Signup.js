import '../Styles/CSS/Logincss.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Signup = () => {

    const department = [
        {id:101, name:"Administration"}, 
        {id:102, name:"Developer"},
        {id:103, name:"Analyst"} 
    ]

    const position = {
        101: [{id:1, name:"System Administrator"},
              {id:2, name:"HR Manager"},
              {id:3, name:"Project Manager"}],
        103: [{id:4, name:"Business Analyst"},
              {id:5, name:"Data Analyst"}],
        102: [{id:6, name:"UI/Ux Developer"},
              {id:7, name:"Software Tester"},
              {id:8, name:"Software Engineer"},
              {id:9, name:"Frontend Developer"},
              {id:10, name:"Backend Developer"}]
    }

    const [departmentId, setDepartmentId] = useState("");
    const [positionId, setPositionId] = useState([]);

    const handleDepartmentChange = (e) => {
        const selectedId = e.target.value;
            setDepartmentId(selectedId);
            setPositionId(position[selectedId] || []);
    };

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
                            <input type="text" placeholder="Enter Your First Name" required />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Enter Last Name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" placeholder="Enter Your Age" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="number" placeholder="Enter Phone Number" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Department:</label>
                            <select className="form-control"
                                value={departmentId}
                                onChange={handleDepartmentChange}                                
                                defaultValue={"2"} >
                                <option value="">select Department</option>
                                {department.map((dept) => (
                                    <option key={dept.id} value={dept.id} >
                                        {dept.name}
                                    </option>
                                ))};
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Position:</label>
                            <select className="form-control">
                                <option value="">select position</option>
                                {positionId.map((posi) => (
                                    <option key={posi.id} value={posi.id}>
                                        {posi.name}
                                    </option>
                                ))};
                            </select>
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