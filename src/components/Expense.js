import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import '../Styles/CSS/Expense.css';
import { Link } from "react-router-dom";
import ExpenseService from "../services/ExpenseService";

const Expense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [typeData, setTypeData] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const saveExpense = (expense) => {
    expense.preventDefault();

  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const email = userdata.email;
  if (!userdata) {
      setError("You must be logged in to add expenses.");
      return;
    }
    /*.then(res => {
      setSuccess("Expense saved successfully!");
      setError("");
      setTitle("");
      setAmount("");
      setDate("");
    })
    .catch(err => {
      console.error("Error saving expense:", err);
      if (err.response && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Failed to save expense. Please try again.");
      }
      setSuccess("");
    });*/

    const expenseData = { title, amount, date, typeData, email };
    console.log("expense data:",expenseData);
    ExpenseService.saveexpense(expenseData)
      .then(response => {
        console.log("save successfully", response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };


  return (
    <div className="box-container" style={{ height: "90vh" }}>
      <h1 className="app-name">Add Expense</h1>
      <div className="box-card">
        <form>
          <div className="form-group">
            <label>Expense Name :</label>
            <input type="text" placeholder="Enter expense title"
              value={title}
              onChange={(expense) => { setTitle(expense.target.value) }}
              required />
          </div>
          <div className="form-group">
            <label>Expense Amount :</label>
            <input type="number" placeholder="Enter amount"
              value={amount}
              onChange={(expense) => { setAmount(expense.target.value) }}
              required />
          </div>
          <div className="form-group">
            <label>Expense Date :</label>
            <input type="date" placeholder="Enter amount"
              value={date}
              onChange={(expense) => { setDate(expense.target.value) }}
              style={{color:"#8D5F8C"}}
              required />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Type:</label>
              <select className="form-control" style={{ color: "#8D5F8C", backgroundColor: "#F4EBEB" }}
                value={typeData}
                onChange={(expense) => setTypeData(expense.target.value)}>
                <option value="">select Type</option>
                <option value="1|House Hold">House hold</option>
                <option value="2|Food">Food</option>
                <option value="3|Traveling">Traveling</option>
                <option value="4|Personal">Personal</option>

              </select>
            </div>
          </div>
          <button type="submit" className="submit-btn" style={{ width: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={(expense) => saveExpense(expense)}
          >Add Expense to Track</button>
        </form>

      </div>
    </div>
  );
};
export default Expense;