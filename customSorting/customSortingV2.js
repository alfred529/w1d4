///////////////////////////////////////
// Exercise 1

// var array = [10, 2, 5, 1, 9];

// console.log(
// array.sort(function(a, b) {
//   return a - b
// })
// )


///////////////////////////////////////
// Exercise 2

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA === nameB) {
    //console.log("line 28", ageSort(a.age, b.age))
    var x = ageSort(a.age, b.age);
    // return b.age - a.age
    return x;
  }
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }


  // names must be equal
  // return 0;
})
)

function ageSort(a, b) {
  return b - a
}
  // if (a < b) {
  //   return -1;
  // }
  // if (a > b) {
  //   return -1
  // }
  // return 0;