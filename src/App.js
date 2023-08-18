import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';

const dummyData = [
  { id: 1, expenseDate: new Date("2020,5,18"), expenseName: "car insurance", expensePrice: 350 },
  { id: 2, expenseDate: new Date("2022,6,10"), expenseName: "New TV", expensePrice: 200 },
  { id: 3, expenseDate: new Date("2023,4,5"), expenseName: "toilet paper", expensePrice: 250 },
  { id: 4, expenseDate: new Date("2023,10,28"), expenseName: "wooden desk", expensePrice: 150 },
  { id: 5, expenseDate: new Date("2023,10,28"), expenseName: "New laptop", expensePrice: 650 },
];
const App = () => {
  let expensesData = {};
  const [expensesArr, setExpensesArr] = useState(dummyData);

  const getExpenseDate = (data) => {
    expensesData =
    {
      id: Math.random(),
      ...data
    }
      ;
    setExpensesArr(
      prevStat => {
        return [
          expensesData,
          ...prevStat
        ]
      }
    )
  }
  // console.log(expensesData);
  return (
    <div className='container mx-auto px-4 md:px-0'>
      <ExpenseForm onSubmitData={getExpenseDate} />
      <Expenses expenseData={expensesArr} />
    </div>
  );
}

export default App;
