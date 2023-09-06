import React, { useState } from 'react';
import './Style.css';

const Hide = (props) => {
    const [isOpen, setOpen] = useState(false);

    const handleTaskOpenButtonClick = () => {
        if (isOpen === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <div className='record__data'>
            <div className='record__delete__card'>
                <button className='record__delete' onClick={() => {
                    let deleteCard = props.record && props.record.filter((element) => element.id !== props.item.id);
                    props.setRecord(deleteCard);
                    localStorage.removeItem('myCards');
                }}>&times;</button>
            </div>
            <div className='record__more__card'>
                <p className='record__title__text'>{props.item.title}</p>
                <button className='record__more' onClick={handleTaskOpenButtonClick}>
                    {isOpen ? <>&#9660;</> : <>&#9668;</>}
                </button>
                {isOpen && <p className='record__text'>{props.item.record}</p>}
            </div>
        </div>
    );
}

export default Hide

