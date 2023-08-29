import React, {useState} from 'react';
import './style.css';

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
            <button className='record__more' onClick={handleTaskOpenButtonClick}>
                <p>{props.data.title}</p>
                <button>{isOpen ? <>&#9660;</> : <>&#9668;</>}</button>
            </button>
            {isOpen && <p className='record__text'>{props.data.record}</p>}
        </div>
    )
}

export default Hide

