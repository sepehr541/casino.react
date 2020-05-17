import React from 'react';
import { connect } from 'react-redux';

const BetButton = (props) => {
    const handleClick = (e) => {
        props.dispatch(
            {
                type: 'BET',
                payload: {
                    tableId: props.tableId,
                    playerId: props.playerId,
                    value: props.value
                }
            }
        )
    }
    return (
        <div className='col s3'>
            <button onClick={handleClick} className={`btn-floating btn-large waves-effect waves-light ${props.color} Betbutton ${!props.isBetOpen ? "disabled": ""}`}>
                {props.value}
            </button>
        </div>
    )
}

const mapState = (state) => {
    return {
        playerId: state.playerId,
        tableId: state.tableId,
        isBetOpen: state.isBetOpen
    };
}
export default connect(mapState, null)(BetButton);