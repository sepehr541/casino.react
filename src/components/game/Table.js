import React from "react";
import { connect } from 'react-redux';
import './styles/Table.css';
import GameButton from './gameInteract/GameButton';
import Bet from './gameInteract/Bet';
import Player from './Player';
import Dealer from './Dealer';


const Table = (props) => {

    // initialize the players

    return (
        <div className='container'>
            <div className='container table' style={{ position: 'relative' }}>
                <div className='topDealer'>
                    <div className='row section'>
                        <div className='col push-s3 push-l5 push-m5'>
                            <Dealer />
                        </div>
                    </div>
                </div>
                <div className='players container' style={{position:'relative', height:'80%', zIndex:'2'}} >
                    <div className='topPlayers row'>
                    <div className='col s2 push-s10'>
                        <Player index={0}  handLeft={'-20px'}/>
                    </div>
                        <Player index={4} playerTop={'0%'} playerLeft={'5%'} handLeft={'20px'} />
                    </div>
                    <div className='midPlayers row' >
                        <Player index={1} playerTop={'35%'} playerLeft={'78%'} handLeft={'-10px'} />
                        <Player index={3} playerTop={'35%'} playerLeft={'15%'} handLeft={'10px'} />
                    </div>
                    <div className='lowPlayers row'>
                        <Player index={2} playerTop={'60%'} playerLeft={'45%'} />
                    </div>
                </div>
            </div>
            <div className='section container row tableBtns'>
                <div className='center-align'>
                    <Bet />
                    <div className='row gameBtns center-align'>
                        <GameButton text='HIT' event='HIT' MaterializeColor={'green darken-4'} offset={'offset-l1 offset-s1 offset-m1'} />
                        <GameButton text='STAY' event='STAY' MaterializeColor={' blue-grey'} offset={'offset-l2 offset-s1 offset-m2'} />
                        <GameButton text='Leave' MaterializeColor={'red darken-1'} offset={"offset-l2 offset-s1 offset-m2"} event='LEAVE' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect()(Table);