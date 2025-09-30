import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.js';

import Login from './components/Login.js';
import ForgetPassword from './components/ForgetPassword.js';
import UpdatePassword from './components/UpdatePassword.js';
import Signup from './components/Signup.js';

import NavBar from './components/NavBar.js'
import Home from './components/Home.js';
import Expense from './components/Expense.js'
import Profile from './components/Profile.js'

import AdminBar from './components/AdminBar.js'
import ListUsers from './components/ListUsers.js'
import AdminDashboard from './components/AdminDashboard.js'
import SalaryPay from './components/SalaryPay.js'
import AddUser from './components/AddUser.js'
import ViewExpense from './components/ViewExpense.js';
import ExpenseDetail from './components/ExpenseDetails.js';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgetpass' element={<ForgetPassword />} />
        <Route path='/updatepass' element={<UpdatePassword />} />

        
        <Route
          path="/admin/*"
          element={
            <>
              <AdminBar />
              <Routes>
                <Route path='/dashboard' element={<AdminDashboard />} />
                <Route path='/listuser' element={<ListUsers />} />
                <Route path='/salarypay' element={<SalaryPay />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/addexpense' element={<Expense />} />
                <Route path='/viewexpense' element={<ViewExpense />} />
                
              </Routes>
            </>
          }
        />

        {/* Pages with Navbar */}
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/addexpense' element={<Expense />} />
                <Route path='/viewexpense' element={<ViewExpense />} />
                <Route path='/expensedetail' element={<ExpenseDetail />} />
                <Route path='/adduser' element={<AddUser />} />
              </Routes>
            </>
          }
        />
  </Routes>
    </BrowserRouter>
  );
}

export default App;