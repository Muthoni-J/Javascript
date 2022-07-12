// // toString() converts an array to a string of (comma separated) array values.
// // join() method also joins all array elements into a string.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// const vegie = ["Carrots", "Onion", "Pepper", "Tomato"];
// console.log(vegie.join(" * "));
// const vegies = ["Carrots", "Onion", "Pepper", "Tomato"];
// console.log(vegies.join());
// //// push() method adds a new element to an array (at the end): 
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.push("Kiwi"));
// // pop() method removes the last element from an array:
// const vegi = ["Carrots", "Onion", "Pepper", "Tomato"];
// console.log(vegi.pop());
// // shift() method removes the first array element and "shifts" all other elements to a lower index.
// const cars = ["subaru", "mazda", "prado", "suzuki"];
// console.log(cars.shift());
// // unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// const car = ["subaru", "mazda", "prado", "suzuki"];
// console.log(car.unshift(mercedes));
// // length property provides an easy way to append a new element to an array:
// // concat() method creates a new array by merging (concatenating) existing arrays:
// const vehicles = ["subaru", "mazda", "prado", "suzuki"];
// const veg = ["Carrots", "Onion", "Pepper", "Tomato"];
// console.log(vehicles.concat(veg));
// // splice() method adds new items to an array.

// // slice() method slices out a piece of an array into a new array.

// var is_array = input => {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));


//   var array = int:{
//     if ()

//   }

//   myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

// // Write a JavaScript program to find duplicate values in a JavaScript array.
// function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(function (item) {
//       if(!object[item])
//           object[item] = 0;
//         object[item] += 1;
//     })

//     for (var prop in object) {
//        if(object[prop] >= 2) {
//            result.push(prop);
//        }
//     }

//     return result;

// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
let nums = [1,2,3];
let y = []
for (let i = 1; i<=nums.length; i++){
  y.push(i+i);
}
console.log(y)


function checkAdult(age) {
  return age >= 24;
}

const ageArray = [34, 25, 24, 26, 32];
let check = ageArray.every(checkAdult); // false

if (!check) {
  console.log("All members must be at least 24 years of age.")
}

// using arrow function
let check1 = ageArray.every(age => age >= 24); // false
console.log(check1);

// defining an array named alphabets
const int = [22, 33, 44,55,66,77];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = int.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]