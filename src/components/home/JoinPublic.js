import React from 'react'
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import spadesW from '../spadesWhite.png'
import './styles/JoinTable.css'
const JoinPublic = (props) => {

    //history hook for redirection
    // const history = useHistory();
    /**
     * handle joinPublic Button
     * @param {Event} e 
     */
    const joinPublic = (e) => {
        e.preventDefault();
        console.log("CLICKED JOIN PUBLIC")
        props.dispatch({
            type:'JOIN_PUBLIC',
            payload:props.nameField.current.value
        });
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

export default connect()(JoinPublic);