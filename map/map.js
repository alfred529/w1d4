// var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
////////////////////////////////////////////////

// CUSTOM MAP FUNCTION

var customMap = function(array, callBack) {
  array.forEach(function(element) {
    callBack(element);
  })
}

// CALLBACK FUNCTIONS

var double = function(number) {
  console.log(number * 2);
};

var yell = function(word) {
  console.log(word.toString().toUpperCase() + "!!!!!!");
};


// TESTS

var testArray = [1, 2, 3, 4, 5, 6];
var words = ['cat', 'dog', 'walrus', 'parrot', 'kangaroo'];

customMap(testArray, double);
customMap(words, yell);
customMap(testArray, yell);
