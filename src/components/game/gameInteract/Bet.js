import React from 'react';
import './Bet.css'
import BetButton from './BetButton'
const Bet = (props) => {

    // const handleClick = (e) => {
    //     e.preventDefault();

    // }

    return (
        <div className="row betBtns">
            <div className='row'>
                <BetButton value={5} color='red darken-4' />
                <BetButton value={10} color='indigo darken-4' />
                <BetButton value={25} color='green darken-3' />
                <BetButton value={100} color='grey darken-4' />
            </div>
        </div>
    )
}

export default Bet;