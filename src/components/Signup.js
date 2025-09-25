import '../Styles/CSS/Logincss.css';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import UserService from '../services/UserService';

const Signup = () => {

    
    const navigate = useNavigate();
    const department = [
        {id:101, name:"Administration"}, 
        {id:102, name:"Developer"},
        {id:103, name:"Analyst"} ]
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
              {id:10, name:"Backend Developer"}] }

    const [departmentId, setDepartmentId] = useState("");
    const [positionList, setPositionList] = useState([]);
    const [positionId, setPositionId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [salary, setSalary] = useState("");
    const [officeId, setOfficeId] = useState("");
    const [message, setMessage] = useState("");

    const saveuser = (e) => {
        e.preventDefault();
        let role = "USER";
        if (departmentId === "101") {  // ensure departmentId matches the value type you use
            role = "ADMIN";
        }
        const user = {firstName, lastName, email, phoneNumber, departmentId, positionId, officeId, salary, age, password, role};
        UserService.saveUser(user)
            .then(response => {
                if (response && response.data && response.data.message) {
                setMessage(response.data.message);
                navigate(`/login`)
                  // e.g., "User created"
            } else {
                setMessage("Signup successful");
                navigate(`/login`)
            }
        })
        .catch(error => {
            console.log("Signup error:", error);

            if (error.response && error.response.data && error.response.data.detail) {
                setMessage(error.response.data.detail);  // e.g., "Email already registered"
            } else if (error.message) {
                setMessage(error.message);
            } else {
                setMessage("Something went wrong");
            }
            })
    }

    const handleDepartmentChange = (e) => {
        const selectedId = e.target.value;
            setDepartmentId(selectedId);
            setPositionList(position[selectedId] || []);
    };


    return (
        <div className="login-container signup-container">
            <h1 className="app-name">PayTrack</h1>
            <div className="login-card signup-card">
                <form className="employee-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" placeholder="Enter Your First Name" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            required />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Enter Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            required />
                        </div>
                        
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="number" placeholder="Enter Phone Number" 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Department:</label>
                            <select className="form-control"
                                value={departmentId}
                                onChange={handleDepartmentChange}   >
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
                            <select className="form-control" 
                                value={positionId}
                                onChange={(e) => setPositionId(e.target.value)}>
                                <option value="">select position</option>
                                {positionList.map((posi) => (
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
                            <input type="number" placeholder="Enter Office ID" 
                                value={officeId}
                                onChange={(e) => setOfficeId(e.target.value)}
                            required />
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input type="number" placeholder="Enter Salary" 
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" placeholder="Enter Your Age" 
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" placeholder="Enter Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}    
                            required />
                        </div>
                    </div>
                    <div style={{textAlign:"center", display:"flex",justifyContent:"center"}}>
                    <button type="submit" className="submit-btn" onClick={(e) => saveuser(e)} style={{maxWidth:"200px"}}>Signup</button>
                                </div>
                </form>
                {message && <p style={{color: "red"}}>{message}</p>}

                <div className="bottom-links" style={{gap:"47px", display:"flex",justifyContent:"center"}}>
                    <Link to="/login">Already Developer ?</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;