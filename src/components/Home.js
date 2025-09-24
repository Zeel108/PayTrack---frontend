import { useEffect, useState } from "react"; 
import UserService from "../services/UserService";

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
        <div>
            <h1>NotesList</h1>
            {                                                                                                     
                users.map(user => (                 
                    <div className="table">                               
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Home;