const ChartBar = props => {
    const barHeight=`${(props.value / props.maxValue)*100}%`;
    // console.log(props.value / props.maxValue);
    return (
        <div className="space-y-3 flex flex-col items-center">
            <div className="rounded-md w-[14px] h-24 bg-cyan-200 relative border overflow-hidden border-black">
                <div className="bar w-full bg-sky-600 rounded-md absolute bottom-0  transition-all duration-300" style={{height:barHeight}}></div>
            </div>
            <div className="capitalize">{props.month}</div>
        </div>
    );
};

export default ChartBar;