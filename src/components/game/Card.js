import React from 'react';
import './styles/Card.css';

import Back from './CardSet/back.png';
// Clubs
import C2 from './CardSet/Clubs/2.png';
import C3 from './CardSet/Clubs/3.png';
import C4 from './CardSet/Clubs/4.png';
import C5 from './CardSet/Clubs/5.png';
import C6 from './CardSet/Clubs/6.png';
import C7 from './CardSet/Clubs/7.png';
import C8 from './CardSet/Clubs/8.png';
import C9 from './CardSet/Clubs/9.png';
import C10 from './CardSet/Clubs/10.png';
import CA from './CardSet/Clubs/A.png';
import CJ from './CardSet/Clubs/J.png';
import CQ from './CardSet/Clubs/Q.png';
import CK from './CardSet/Clubs/K.png';

//Diamonds
import D2 from './CardSet/Diamonds/2.png';
import D3 from './CardSet/Diamonds/3.png';
import D4 from './CardSet/Diamonds/4.png';
import D5 from './CardSet/Diamonds/5.png';
import D6 from './CardSet/Diamonds/6.png';
import D7 from './CardSet/Diamonds/7.png';
import D8 from './CardSet/Diamonds/8.png';
import D9 from './CardSet/Diamonds/9.png';
import D10 from './CardSet/Diamonds/10.png';
import DA from './CardSet/Diamonds/A.png';
import DJ from './CardSet/Diamonds/J.png';
import DQ from './CardSet/Diamonds/Q.png';
import DK from './CardSet/Diamonds/K.png';

//Hearts
import H2 from './CardSet/Hearts/2.png';
import H3 from './CardSet/Hearts/3.png';
import H4 from './CardSet/Hearts/4.png';
import H5 from './CardSet/Hearts/5.png';
import H6 from './CardSet/Hearts/6.png';
import H7 from './CardSet/Hearts/7.png';
import H8 from './CardSet/Hearts/8.png';
import H9 from './CardSet/Hearts/9.png';
import H10 from './CardSet/Hearts/10.png';
import HA from './CardSet/Hearts/A.png';
import HJ from './CardSet/Hearts/J.png';
import HQ from './CardSet/Hearts/Q.png';
import HK from './CardSet/Hearts/K.png';

//Spades
import S2 from './CardSet/Spades/2.png';
import S3 from './CardSet/Spades/3.png';
import S4 from './CardSet/Spades/4.png';
import S5 from './CardSet/Spades/5.png';
import S6 from './CardSet/Spades/6.png';
import S7 from './CardSet/Spades/7.png';
import S8 from './CardSet/Spades/8.png';
import S9 from './CardSet/Spades/9.png';
import S10 from './CardSet/Spades/10.png';
import SA from './CardSet/Spades/A.png';
import SJ from './CardSet/Spades/J.png';
import SQ from './CardSet/Spades/Q.png';
import SK from './CardSet/Spades/K.png';


//placehlder image
import ph from './ph.png';

/**
 * 0 : Spades
 * 1 : Clubs
 * 2 : Hearts
 * 3 : Diamonds
 */

const Cards = [
    //Spades
    [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK],
    //Clubs
    [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK],
    //Hearts
    [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK],
    //Diamonds
    [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK]
]

const Card = (props) => {

    if (props.placeholder) {
        return (
            <div className='col s1'>
            <img alt="" src={ph} width="32em" height='55em' className="Card" />
        </div>
        )
    }

    if (props.back) {
        return (
            <div className='col s1'>
            <img alt="" src={Back} width="32em" height='55em' className="Card" />
        </div>
        )
    }
    let [suit, rank] = props.card.split("-").map(str => parseInt(str));
    return (
        <div className='col s1'>
            <img alt="" src={Cards[suit][rank]} width="32em" height='55em' className="Card" />
        </div>
    )
}

export default Card;