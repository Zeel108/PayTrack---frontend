import { useState, useEffect } from "react";
import $ from "jquery";
import UserService from "../services/UserService";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";


 

const ListUsers = () => {
   
    const [userList, setUserList] = useState("");
    //let table = new DataTable('myTable');

    useEffect( () => {
          $("#myTable").DataTable();
  
        UserService.getusers()
            .then(users => {
                setUserList(users.data);
                console.log("users",users.data);
            })
            .catch(error => {
                console.log("some error occur from fetching users from database",error);
            })

    }, []);

    return ( 
        <div>
            <div>
            { Array.isArray(userList) && userList.map((user,index) =>(
                <li key={index}>{user.first_name}</li>
            ))
                
                }</div>

                <table id="myTable" className="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
</table>



            </div>
     );
}
 
export default ListUsers;