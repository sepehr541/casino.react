import React from 'react';
import { connect } from 'react-redux';
import betCircle from './betCircle.svg'
import Card from './Card';
import sumHand from './SumHand';
// player has hand, betCircle, name
const Player = (props) => {
    const betConverter = (bet) => {
        if (bet < 1000) {
            return bet;
        } else if (bet >= 1000 && bet < 1000000) {
            return `${bet / 1000}K`
        } else {
            return `${bet / 1000000}M`
        }
    }

    return (
        <div className='player' style={{ position: 'absolute', top: `${props.playerTop}`, left: `${props.playerLeft}` }}>
            <div>
                <div style={{ position: 'relative', top: `${props.handTop}`, left: `${props.handLeft}` }}>
                    <div className='playerHand row'>
                    <div>
                        <lable>{props.hand ? `Sum: ${sumHand(props.hand)}`: ''}</lable>
                    </div>
                       {props.hand ? props.hand.length > 0 ? props.hand.map(card => <Card card={card} />) : '': <Card back={true}/> }
                    </div>
                </div>
                <div style={{ position: 'relative', top: `${props.infoTop}`, left: `${props.infoLeft}` }}>
                    <div className='betCircle' style={{ position: 'relative' }} width='40px' height='40px'>
                        <img src={betCircle} alt='' width='35px' height='35px' />
                        <label style={{ position: 'absolute', top: '7px', left: '6px', color: 'purple', fontSize: '13px' }}>{betConverter(props.bet)}</label>
                    </div>

                    <div className='playerName'>
                        <label style={{ color: 'purple' }}>{props.name}</label>
                        <br/>
                        <label style={{ color: 'black' }}>Chips: {betConverter(props.chips)}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

// because players are sent with keys as indices, e.g. '0': player
// thus we need to get the player according to index

const mapStatetoProps = (state, ownProps) => {
    return state[ownProps.index] ? state[ownProps.index] : { player: undefined };
}

export default connect(mapStatetoProps)(Player);