import { useState } from "react";

const Expense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // assuming you saved token at login
    if (!token) {
      setError("You must be logged in to add expenses.");
      return;
    }

    const expenseData = { title, amount, date };

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
  };
  return (
    <div style={{maxWidth:"400px", margin:"auto", marginTop:"40px"}}>
      <h2>Add Expense</h2>
      {error && <p style={{color:"red"}}>{error}</p>}
      {success && <p style={{color:"green"}}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:"10px"}}>
          <label>Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            required
            style={{width:"100%", padding:"8px"}}
          />
        </div>
        <div style={{marginBottom:"10px"}}>
          <label>Amount</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            required
            style={{width:"100%", padding:"8px"}}
          />
        </div>
        <div style={{marginBottom:"10px"}}>
          <label>Date</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)} 
            required
            style={{width:"100%", padding:"8px"}}
          />
        </div>
        <button type="submit" style={{padding:"10px 20px"}}>Save</button>
      </form>
    </div>
  );
};
 
export default Expense;