// let num = [2,5,8,9]
// let [a,b,c,d]= num;
// console.log({a});
// console.log({b});
// console.log({c});
// console.log({d});

let num = [2,5,8,9]
let [a,b,...others] = [2,5,8,9];
console.log({a});
console.log({b});
console.log({others});

//Spread operator
let person = {
    name :"Joan",
    age:24,
    class:"Hopper Lap"

}
let {name,people} = person;
console.log(name);