import React from 'react';

const BetButton = (props) => {
    return (
        <div className='col s3'>
            <button className={`btn-floating btn-large waves-effect waves-light ${props.color} Betbutton`}>
                {props.value}
            </button>
        </div>
    )
}

export default BetButton;