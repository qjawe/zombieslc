var deckOfCards = function(shuf) {
   var suit = ["Club", "Spade", "Diamond", "Hearts"];
   var name = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
   var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

   var theDeck = [];

   //Create the deck
   for (var s in suit) {
       for (var n in name)
           theDeck.push({
               suit: suit[s],
               name: name[n],
               value: value[n]
           });
   }

   //Shuffle
   shuf = shuf || 3;
   for (var times = 0; times < shuf; times++)
       for (var i = 0; i < theDeck.length; i++) {
           var dst = parseInt(Math.random() * theDeck.length)
           var swapVal = theDeck[i];
           theDeck[i] = theDeck[dst];
           theDeck[dst] = swapVal;
       }

   return (theDeck);
}

var taitee = deckOfCards();
console.log(taitee);
