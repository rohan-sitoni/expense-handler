import { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenses) => {
        const expenseData = {
            ...enteredExpenses,
            id : "e" + Math.random(100 - 0 + 1).toString()
        };
        props.addExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className = "new-expense" >
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;