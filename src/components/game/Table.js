import React from "react";
import './styles/Table.css'
import GameButton from './gameInteract/GameButton';
import Bet from './gameInteract/Bet'
import hitIcon from './gameInteract/hitW.svg'
import stayIcon from './gameInteract/stay.svg'
import Player from './Player';
import Dealer from './Dealer'
const Table = (props) => {

    // initial animation

    // update animation

    // betting animation

    return (
        <div className='container'>
            <div className='container table' style={{ position: 'relative' }}>
                <div className='topDealer'>
                    <div className='row section'>
                        <div className='col s2 push-s5'>
                            <Dealer />
                        </div>
                    </div>
                </div>
                <div className='players container' style={{position:'relative', height:'80%'}}>
                    <div className='topPlayers'>
                        <Player playerTop={'0%'} playerLeft={'85%'} handLeft={'-20px'}/>
                        <Player playerTop={'0%'} playerLeft={'5%'} handLeft={'20px'} />
                    </div>
                    <div className='midPlayers' >
                        <Player playerTop={'35%'} playerLeft={'78%'} handLeft={'-10px'} />
                        <Player playerTop={'35%'} playerLeft={'15%'} handLeft={'10px'} />
                    </div>
                    <div className='lowPlayers'>
                        <Player playerTop={'60%'} playerLeft={'45%'} />
                    </div>
                </div>
            </div>
            <div className='section container row tableBtns'>
                <div className='center-align'>
                    <Bet />
                    <div className='row gameBtns center-align'>
                        <GameButton text={<img src={hitIcon} alt="" width="30px" height="40px" style={{ top: '5px' }} />} MaterializeColor={'green darken-4'} offset={'offset-l1 offset-s1 offset-m1'} />
                        <GameButton text={<img src={stayIcon} alt="" width="50px" height="50px" style={{ top: '2px' }} />} MaterializeColor={' blue-grey lighten-4'} offset={'offset-l2 offset-s1 offset-m2'} />
                        <GameButton text='Leave' MaterializeColor={'red darken-1'} offset={"offset-l2 offset-s1 offset-m2"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;