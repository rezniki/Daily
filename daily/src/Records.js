function Records(props) {
    return (
        props.record.map((item) => {
            <div className='record__data'>
                <button className='record__delete' onClick={() => {
                    let deleteCard = props.record.filter((element) => element.id !== item.id);
                    props.setRecord(deleteCard);
                }}>&times;</button>
                <p className='record__text'>{item.record}</p>
            </div>
        })
    );
}

export default Records