import ExpensesList from './ExpensesList.js';
import './Expenses.css';
import Cards from '../UI/Cards.js';
import ExpensesFilter from './ExpensesFilter.js';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState("2022");

    const selectFilterHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        
        <Cards className = "expenses">
            <ExpensesFilter initialSetYear = {filteredYear} selectFilter = {selectFilterHandler}/>

            <ExpensesChart expenses = {filteredExpenses} />

        <ExpensesList items = {filteredExpenses}/>;       

        </Cards>
        
    );
}

export default Expenses;