const ExpenseFilter = (props) => {
    
    const yearHandler = (e) => props.onSelectYear(e.target.value);

    return (
        <div className="space-y-3">
            <label className="text-white capitalize block opacity-70 text-lg">filter by year</label>
            <select className="rounded-md w-36 text-center h-9 text-xl outline-none" value={props.initialYear} onChange={yearHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;