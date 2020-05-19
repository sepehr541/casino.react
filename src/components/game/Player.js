import React from 'react';
import { connect } from 'react-redux';
import betCircle from './betCircle.svg'
import Card from './Card';
import sumHand from './SumHand';
import './styles/Player.css';
// player has hand, betCircle, name
const Player = (props) => {
    return (
        <div className='player'>
            <div style={{ position: 'relative', top: `${props.handTop}`, left: `${props.handLeft}` }}>
                <div className='playerHand'>
                    <div className='row'>
                        {props.hand ? props.hand.length > 0 ? props.hand.map(card => <Card card={card} />) : <Card placeholder={true} /> : <Card back={true} />}
                    </div>
                    <div>
                        <label className='handSum'>{props.hand ? `Sum: ${sumHand(props.hand)}` : ''}</label>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', top: `${props.infoTop}`, left: `${props.infoLeft}` }}>
                <div className='betCircle' style={{ position: 'relative' }} width='40px' height='40px'>
                    <img src={betCircle} alt='' width='35vw' height='35vh' />
                    <label className='betCircleNum' >{betConverter(props.bet)}</label>
                </div>

                <div className='playerName'>
                    <label className={`playerName ${props.currentPlayer === props.index && props.hand && !props.isBetOpen ? 'glow': ''}`} >{props.name ? props.name : ''}</label>
                    <br />
                    <label className='chipsCount'> {props.chips ? `Chips: ${betConverter(props.chips)}` : 'Chips: 0'}</label>
                </div>
            </div>
        </div>
    )
}

const betConverter = (bet) => {
    if (bet < 1000) {
        return bet;
    } else if (bet >= 1000 && bet < 1000000) {
        return `${bet / 1000}K`
    } else {
        return `${bet / 1000000}M`
    }
}

// because players are sent with keys as indices, e.g. '0': player
// thus we need to get the player according to index

const mapStatetoProps = (state, ownProps) => {
    return {
        ...state[ownProps.index],
        currentPlayer: state.currentPlayer,
        isBetOpen: state.isBetOpen
    };
}

export default connect(mapStatetoProps)(Player);