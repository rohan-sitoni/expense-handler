import './ExpensesList.css';
import ExpenseItem from './ExpenseItem.js'

const ExpensesList = (props) => {
    let expensesContent = <h2 className = "expenses-list__fallback">No expense found.</h2>

    if(props.items.length > 0){
        expensesContent = props.items.map((expense) => (<ExpenseItem
            key = {expense.id}
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date} />
            ));
    }
    return (
        <ul className ="expenses-list">
            {expensesContent};
        </ul>
    );
}

export default ExpensesList;