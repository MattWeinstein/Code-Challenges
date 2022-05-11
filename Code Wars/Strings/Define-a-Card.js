/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).*/

function defineSuit(card) {
  switch(card.split('').pop())
  {
   case '♣': return 'clubs';
   case '♠': return 'spades';
   case '♦': return 'diamonds';
   case '♥': return 'hearts';
  }
}
