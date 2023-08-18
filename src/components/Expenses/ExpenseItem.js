import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="flex md:justify-between md:py-2 px-3 bg-slate-700 items-center rounded-xl font-roboto text-lg md:flex-nowrap flex-wrap text-center md:text-let md:gap-y-0 gap-y-5 justify-center py-5">
            <div className="text-white flex items-center md:flex-nowrap flex-wrap md:gap-y-0 gap-y-5 justify-center">
                <ExpenseDate date={props.date} />
                <div className="capitalize font-semibold basis-full ml-5">{props.name}</div>
            </div>
            <div className="text-white px-8 py-2 bg-purple-950 rounded-xl border  md:w-[110px] text-center w-3/4 md:basis-0">${props.price}</div>
        </div>
    );
}
export default ExpenseItem;