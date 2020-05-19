import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import spadesW from '../spadesWhite.png'
import './styles/JoinTable.css'

const JoinPublic = (props) => {

    const joinPublic = (e) => {
        e.preventDefault();
        props.dispatch({
            type: 'JOIN_PUBLIC',
            payload: props.nameField.current.value
        });

        
    }

    if (props.tableId && props.playerId) {
        return <Redirect to={`/table/${props.tableId}`} />;
    }
    return (
        <div className='center-align'>
            <div className="row">
                <button className="btn btn-large blue darken-3 waves-effect waves-light menuBtn" onClick={joinPublic}>
                    <img alt="" className='circle icon' src={spadesW} width='20px' height='20px' />
                Join Public Table
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        tableId: state.tableId,
        playerId: state.playerId
    }
}

// connect to redux
export default connect(mapStateToProps)(JoinPublic);