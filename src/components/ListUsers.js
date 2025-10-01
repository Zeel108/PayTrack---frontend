import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserService from "../services/UserService";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import '../Styles/CSS/Expense.css';



const ListUsers = () => {

    const [userList, setUserList] = useState("");
    //let table = new DataTable('myTable');

    useEffect(() => {
        
        UserService.getusers()
            .then(users => {
                setUserList(users.data);
                console.log("users", users.data);
            })
            .catch(error => {
                console.log("some error occur from fetching users from database", error);
            })
            
    }, []);

      useEffect(() => {
    if (userList.length > 0) {
      $("#myTable").DataTable(); // only run once data exists
    }
  }, [userList]);

    return (
        <div className="list-container">
            <div className="list-card">
                <div>
                    </div>

                <table id="myTable" className="display">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Office Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   Array.isArray(userList) && userList.map((user, index) => (
                            <tr key={index}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.office_id}</td>                       
                            <td><Link to={"/admin/dashboard"} className="table-link">details</Link>
                               <Link to={"/admin/dashboard"} className="table-link">view expense</Link>
                               <Link to={"/admin/dashboard"} className="table-link">update</Link>
                               <Link to={"/admin/dashboard"} className="table-link">delete</Link></td>
                            </tr>
                    ))

                    }
                        </tbody>
                </table>


            </div>
        </div>
    );
}

export default ListUsers;