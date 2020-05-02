import React from 'react';

// Game buttons that will send events on the socket
const GameButton = (props) => {


    const handleClick = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <button className={`btn btn-large ${props.MaterializeColor ? props.MaterializeColor : ''} waves-effect waves-light col m2 l2 ${props.offset ? props.offset : ''}`}
                style={{ color: '#fdd835' }} onClick={handleClick}>
                {props.text}
            </button>
        </div>
    )
}
export default GameButton;