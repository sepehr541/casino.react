import React, { useRef } from 'react';
import './Home.css';
import JoinPublic from './home/JoinPublic';
import MakeTable from './home/MakeTable';
import JoinPrivate from './home/JoinPrivate';
import LV from './LV.png'

const Home = (props) => {

    const nameField = useRef();

    return (
        <div className="home">
            <div className="container center-align menu">
                <div className='row'>
                    <img src={LV} alt='' width='190px' height='140px' />
                </div>
                <div className="row">
                    <div className='center-align' style={{ display: 'inline-block' }} >
                        <div className="input-field menuField">
                            <textarea id="textarea1" className="materialize-textarea" ref={nameField}></textarea>
                            <label htmlFor="textarea1">Name</label>
                        </div>
                    </div>
                    <div className='col s12'>
                        <JoinPublic nameField={nameField} />
                    </div>

                    <div className='col s12'>
                        <JoinPrivate nameField={nameField} />
                    </div>

                    <div className='col s12'>
                        <MakeTable nameField={nameField} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;