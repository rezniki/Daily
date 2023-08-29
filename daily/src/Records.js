import {useState} from "react";

function Records(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='record__card'>
            {props.record.map((item) => {
                return (
                    <div className='record__data' key={item.id}>
                        <button className='record__delete' onClick={() => {
                        let deleteCard = props.record.filter((element) => element.id !== item.id);
                        props.setRecord(deleteCard);
                        }}>&times;</button>
                        <div className='record__content'>
                            {expanded === item.id ? (
                                <button className='record__less' onClick={() => setExpanded('')}>Less</button>
                            ):(
                                <button className='record__more' onClick={() => setExpanded(item.id)}>More</button>
                            )}
                            {expanded === item.id && (
                                <p className='record__text'>{item.record}</p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Records