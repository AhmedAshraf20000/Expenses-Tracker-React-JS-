import { useState } from "react";
import NewExpenseWrapper from "./NewExpenseWrapper";

const ExpenseForm = (props) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameHandler = (e) => setName(e.target.value);

    const amountHandler = (e) => setAmount(e.target.value);

    const dateHandler = (e) => setDate(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            expenseName: name,
            expensePrice: amount,
            expenseDate: new Date(date)
        }
        props.onSubmitData(expenseData);
        setName('');
        setAmount('');
        setDate('');
    };

    return (
        <NewExpenseWrapper>
            <form className="md:grid grid-cols-2 gap-y-2 gap-x-5 flex flex-wrap" onSubmit={submitHandler}>
                <div className=" space-y-2 basis-full">
                    <label className="block text-xl font-semibold capitalize ">title</label>
                    <input type="text" className="rounded-md outline-none px-3 py-2 caret-cyan-600 w-full" onChange={nameHandler} value={name} />
                </div>
                <div className=" space-y-2  basis-full">
                    <label className="block text-xl font-semibold capitalize">price</label>
                    <input type="number" className="rounded-md outline-none px-3 py-2 caret-cyan-600 w-full" min={0} max={500} onChange={amountHandler} value={amount} step={'any'} />
                </div>
                <div className=" space-y-2  basis-full">
                    <label className="block text-xl font-semibold capitalize">date</label>
                    <input type="date" className="rounded-md outline-none px-3 py-2 caret-cyan-600 w-full" onChange={dateHandler} value={date} min="2020-01-01" max="2023-12-31" />
                </div>
                <button
                    type="submit"
                    className="text-xl font-semibold capitalize bg-purple-950 w-1/2 md:h-3/5 rounded-lg ml-auto md:mt-auto text-white h-12 mt-2">add expense</button>
            </form>
        </NewExpenseWrapper>
    );
};

export default ExpenseForm;