import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  './App.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js'
import SideBar from './components/SideBar.js'
import Admin from './components/Admin.js'
import ListUsers from './components/ListUsers.js'
import Login from './components/Login.js';
import ForgetPassword from './components/ForgetPassword.js';
import UpdatePassword from './components/UpdatePassword.js';
import Signup from './components/Signup.js';


function App() {


    return (
      <BrowserRouter>
        <Routes>

          <Route path='/users' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgetpass' element={<ForgetPassword />} />
          <Route path='/updatepass' element={<UpdatePassword />} />
        </Routes>
      
      </BrowserRouter>



    );
}

export default App;