import ExpenseWrapper from './ExpenseWrapper';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import Chart from '../Charts/Chart';

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');
    let filteredData = props.expenseData.filter(e => `${e.expenseDate.getFullYear()}` === filteredYear);
    const selectedYearChange = (year) => {
        setfilteredYear(year);
        filteredData = props.expenseData.filter(e => `${e.expenseDate.getFullYear()}` === filteredYear);
    }

    if (filteredData.length === 0) {
        return (
            <ExpenseWrapper className="container space-y-4 my-4 max-w-[700px] bg-slate-900 mx-auto px-4 py-5 rounded-xl ">
                <ExpenseFilter initialYear={filteredYear} onSelectYear={selectedYearChange} />
                <p className='text-center text-white font-bold text-xl capitalize'>no expenses found to show.</p>;
            </ExpenseWrapper>
        );
    }

    else {
        return (
            <ExpenseWrapper className="container space-y-4 my-4 max-w-[700px] bg-slate-900 mx-auto px-4 py-5 rounded-xl ">
                <ExpenseFilter initialYear={filteredYear} onSelectYear={selectedYearChange} />
                <Chart expenseData={filteredData} />
                {filteredData.map(e => <ExpenseItem name={e.expenseName} price={e.expensePrice} date={e.expenseDate} key={e.id} />)};
            </ExpenseWrapper>
        );
    }
}

export default Expenses;