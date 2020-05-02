import React from 'react';
import betCircle from './betCircle.svg'
import Card from './Card';
// player has hand, betCircle, name
const Player = (props) => {
    const betConverter = (bet) => {
        if (bet < 1000) {
            return bet;
        } else if (bet > 1000 && bet < 1000000) {
            return `${bet / 1000}K`
        } else {
            return `${bet / 1000000}M`
        }
    }
    return (
        <div className='player' style={{position:'absolute', top:`${props.playerTop}`, left:`${props.playerLeft}`}}>
            <div>
            <div style={{position:'relative', top:`${props.handTop}`, left:`${props.handLeft}`}}>
                    <div className='playerHand'>
                        {<Card />}
                    </div>
                </div>
                <div style={{position:'relative', top:`${props.infoTop}`, left:`${props.infoLeft}`}}>
                    <div className='betCircle' style={{ position: 'relative' }} width='40px' height='40px'>
                        <img src={betCircle} alt='' width='35px' height='35px' />
                        <label style={{ position: 'absolute', top: '7px', left: '6px', color: 'purple', fontSize: '13px' }}>{betConverter(300)}</label>
                    </div>

                    <div className='playerName'>
                        <lable style={{ color: 'purple' }}>NAME</lable>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Player;