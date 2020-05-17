const sumHand = (hand) => {
    // initial sum
    let sum = 0;
    // rank cards saved in this
    let cards = [];

    // if we have ace or not, as ace can be either 1 or 11
    let hasAce = false;

    hand.forEach(card => {
        let rank = parseInt(card.split('-')[1]) + 1;
        cards.push(rank);
    });

    for (let card of cards){
        if(card === 1 && sum + 11 > 21){ // Ace as 0
            sum++;
        } else if (card === 1 && sum + 11 <= 21){ // Ace as 0
            sum += 11
        } else if(card >= 10){ // 10 and face cards 
            if(!hasAce){
                sum += 10;
            }
        } else { // other cards
            sum += card;
        }
    }
    return sum;
}

export default sumHand;