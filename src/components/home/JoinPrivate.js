import React from 'react'
// import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { connect } from 'react-redux'
import spadesW from '../spadesWhite.png'
import './styles/JoinTable.css'
const JoinPrivate = (props) => {

    //history hook for redirection

    // const history = useHistory();
    const joinPrivate = (e) => {
        e.preventDefault();

    }

    return (
        <div className='center-align'>
            <div className="row">
                <div className='center-align' style={{ display: 'inline-block' }} >
                    <div className="input-field menuField">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Table's Code</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <button className="btn btn-large blue-grey darken-4 waves-effect waves-light menuBtn" style={{ color: '#fdd835' }} onClick={joinPrivate}>
                    <img className='circle icon' src={spadesW} width='20px' height='20px' alt="" />
                Join Private Table
                </button>
            </div>
        </div>
    )

}

export default connect()(JoinPrivate);