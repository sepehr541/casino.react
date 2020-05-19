import React from 'react';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
// Game buttons that will send events on the socket
const GameButton = (props) => {

    let history = useHistory();
    const handleClick = (e) => {
        props.dispatch({
            type: props.event,
            payload: {
                tableId: props.tableId,
                playerId: props.playerId
            }
        })

        if (props.event === "LEAVE") {
            history.push('/');
        }

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

function mapStateToProps(state) {
    return {
        tableId: state.tableId,
        playerId: state.playerId
    }
}

export default connect(mapStateToProps, null)(GameButton);