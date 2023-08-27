function Records(props) {
    return (
        <div>
            {props.record.map((item) => {
                return (
                    <div className='record__data'>
                        <button className='record__delete' onClick={() => {
                        let deleteCard = props.record.filter((element) => element.id !== item.id);
                        props.setRecord(deleteCard);
                        }}>&times;</button>
                        <p className='record__text'>{item.record}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Records