import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import sumHand from './SumHand';
const Dealer = (props) => {

    let cardMap = props.hand.length > 0 ? props.hand.map(card => <Card card={card} />) : <Card placeholder={true} />;
    if (props.hand.length > 0 && !props.show) {
        cardMap[1] = <Card back={true} />;
    }

    return (
        <div className='Dealer'>
            <div className='row'>
                {cardMap}
            </div>
            <div className='row'>
                {props.show ? `Dealer: ${sumHand(props.hand)}` : ''}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        hand: state.dealerHand,
        show: state.showDealer
    }
}
export default connect(mapStateToProps)(Dealer);