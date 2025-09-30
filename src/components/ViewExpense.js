import { Link } from "react-router-dom";

const ViewExpense = () => {
    return ( 
        <div>
        <h1>Add Expense</h1>
        <Link to={"/expensedetail"} >View Expense</Link>
        </div>
     );
}
 
export default ViewExpense;