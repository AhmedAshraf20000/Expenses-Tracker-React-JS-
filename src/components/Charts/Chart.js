import ChartBar from "./ChartBar";

const Chart = props => {
    let monthsArr = [
        { month: 'Jan', value: 0 },
        { month: 'Fab', value: 0 },
        { month: 'Mar', value: 0 },
        { month: 'Apr', value: 0 },
        { month: 'May', value: 0 },
        { month: 'Jun', value: 0 },
        { month: 'Jul', value: 0 },
        { month: 'Aug', value: 0 },
        { month: 'Sep', value: 0 },
        { month: 'Oct', value: 0 },
        { month: 'Nov', value: 0 },
        { month: 'Dec', value: 0 }
    ]
    props.expenseData.map(e => monthsArr[e.expenseDate.getMonth()].value += e.expensePrice);
    let maxValue = 0;
    monthsArr.map(e => e.value >= maxValue ? maxValue = e.value : "");
    //  console.log(monthsArr);
    return (
        <div className="md:flex justify-between bg-cyan-500 py-4 px-3 rounded-lg hidden">
            {monthsArr.map((e,i) => <ChartBar month={e.month} value={e.value} maxValue={maxValue}  key={i}/>)}
        </div>
    );
};

export default Chart;