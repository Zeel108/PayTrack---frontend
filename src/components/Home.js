import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import '../Styles/CSS/Home.css';

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
        <div style={{textAlign:"center"}}>
         
    </div>
    );
}

export default Home;