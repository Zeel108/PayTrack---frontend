import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import '../Styles/CSS/Expense.css';
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getusers()
            .then(users => {
                setUsers(users.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }, []);

return (
    <div className="box-container" style={{marginTop:"-200px"}}>
      Hello
    </div>
  );
};

export default Home;