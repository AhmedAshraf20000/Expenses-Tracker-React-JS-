const ExpenseDate = (props) => {
    // console.log(props.date);
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="bg-slate-900 px-2 py-2 text-center rounded-lg md:w-[200px] border w-full">
            <div className="opacity-100">{month}</div>
            <div className="opacity-70">{year}</div>
            <div className="text-xl font-semibold">{day}</div>
        </div>
    );
}

export default ExpenseDate;