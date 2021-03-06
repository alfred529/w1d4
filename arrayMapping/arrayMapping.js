// var array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var sqrt = function(input) {
  return(Math.sqrt((input.x * input.x) + (input.y * input.y)));
}

var result = input.map(sqrt);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);