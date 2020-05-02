import React, { Component } from 'react'
import spadesW from '../spadesWhite.png'

class MakeTable extends Component {
    handleMake = () => {

    }

    render() {
        return (
            <div>
                <button className="btn btn-large red darken-4 waves-effect waves-light menuBtn" style={{ color: '#fdd835' }} onClick={this.handleMake}>
                    <img alt="" src={spadesW} width='20px' height='20px' className='circle icon' />
            Make private game
            </button>
            </div>
        )
    }
}

export default MakeTable;