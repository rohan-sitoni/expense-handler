import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Cards from "../UI/Cards.js";
function ExpenseItem(props) {
  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Cards>
    </li>
  );
}

export default ExpenseItem;
