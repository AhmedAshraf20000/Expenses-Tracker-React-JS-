const NewExpenseWrapper = (props) => {
    return(
        <div className=" container max-w-[700px] bg-cyan-600 mx-auto px-4 py-5 rounded-xl mt-4">{props.children}</div>
    );
};

export default NewExpenseWrapper;