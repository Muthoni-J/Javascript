// fruits = ["banana", "apple", "mango"];
// for (let x in fruits) {
//   console.log(fruits[x]);
// }

// function a() {
//   var x = 2;
//   function b() {
//     var y = 3;
//     console.log(y);
//   };
//   b();
// };
// // a();
// Q10 Consider the following array:
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// Use filter then map functions to filter even numbers then square them. Assign the result to a variable named squaredEvenNums and display it. The output should be:
// squaredEvenNums: [484, 2116, 7396, 9604]
// Use the reduce function to calculate the sum of nums array. The output should be:
// Sum of array elements: 468
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums = nums.filter(num => num%2===0 )
                          .map(num=>num*num);
console.log(squaredEvenNums);
 
let sum = nums.reduce((acc, cur) => acc+cur, 0);
console.log(sum);