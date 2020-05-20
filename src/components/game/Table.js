import React from "react";
import { connect } from 'react-redux';
import './styles/Table.css';
import GameButton from './gameInteract/GameButton';
import Bet from './gameInteract/Bet';
import Player from './Player';
import Dealer from './Dealer';
import { useBeforeunload } from 'react-beforeunload';

const Table = (props) => {

    useBeforeunload(()=> {
        props.dispatch({
            type: "LEAVE",
            payload: {
                tableId: props.tableId,
                playerId: props.playerId
            }
        })
    });

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
                <div className='players container' style={{ position: 'relative', height: '40%', zIndex: '2' }} >
                    <div className='row'>
                        <div className='col s2 push-s10'>
                            <Player index={0} handLeft={'-20px'} />
                        </div>
                        <div className='col s2 pull-s2'>
                            <Player index={2} handLeft={'20px'} />
                        </div>
                        <div className='col s2 push-s1'>
                            <Player index={1} handLeft={'10px'} />
                        </div>
                    </div>
                </div>
                <div className='center-align' style={{ position:'relative', padding: '20px', top: '10px', height: '20%', zIndex: '2' }} >
                    <div className='row'>
                        <div className='col s4 push-l4 push-s2'>
                            <p className="glow">{props.isBetOpen ? 'Place Bets' : props.showDealer ? "Reveal" : "Hit or Stay"}</p>
                        </div>
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

const mapStateToProps = state => {
    return {
        tableId: state.tableId,
        playerId: state.playerId,
        isBetOpen: state.isBetOpen,
        showDealer: state.showDealer
    }
}
export default connect(mapStateToProps)(Table);