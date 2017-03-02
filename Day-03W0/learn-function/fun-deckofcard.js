// Random Sorting
var numbers = [12,4,16,3];
numbers.sort(function() {
  return .5 - Math.random();
});

// results from sorting 5 times
//[3, 16, 4, 12]
//[16, 4, 3, 12]
//[16, 12, 4, 3]
//[16, 12, 3, 4]
//[3, 12, 16, 4]
//
// -----------------------------------------

// Fisher–Yates Shuffle
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

// Better codes
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}
// -----------------------------------------

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
// -----------------------------------------




//  examples 01
var deckOfCard = function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


// example 02
var sfdeckcard = function shuffle(array) {
   temp = [];
  //  print out?
   console.log();

   for (var i = 0; i < array.length ; i++) {
     temp.push(array.splice(Math.floor(Math.random()*array.length),1));
   }
   return temp;
};


// Using the Algorithm examples
var someArray = [1,2,3,4,5,6,7,8,9];
var theLength = someArray.length - 1;
var toSwap; // The index we will swap  (i.e. the random number)
var temp; // A temporary variable to hold reference to index variable i points to
for (i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * i);
    temp = someArray[i];
    someArray[i] = someArray[toSwap];
    someArray[toSwap] = temp;

// -----------------------------------------


// This is to display all deck cards.
var deck_array = [];

for (var a=0; a<suite.length; a++) {
 for (var b=0; b<num.length; b++) {
   var card = {
     face: suite[a],
     value: num[b],
     displayCard: function() {
         console.log("%s of %s", this.face, this.value);
     }
   };
   card.displayCard();
   deck_array.push(card);
 }
}

console.log(deck_array.length);
// -----------------------------------------


function shuffle (array) {
  var s = ("a", "b");
    , n = ("1", "2", "3");
    , deck = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    deck = array[i]
    array[i] = array[j]
    array[j] = deck
  }
}
