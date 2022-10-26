import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './DisplayExpenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const DisplayExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const displaySelectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredByYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={displaySelectedYearHandler}
        />
        <ExpensesChart expenses={filteredByYear}/>
        <ExpensesList expenses={filteredByYear}/>
      </Card>
    </li>
  );
};

export default DisplayExpenses;
