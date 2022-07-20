let num = [2,5,8,9]
let [a,b,...others] = [2,5,8,9];
console.log({a});
console.log({b});
console.log({others});

setTimeout(function(){
    console.log("Hopper Lab");

},1000)
let person = {
    name :"Joan",
    age:24,
    class:"Hopper Lab"

}
let {name,people} = person;
console.log(name);