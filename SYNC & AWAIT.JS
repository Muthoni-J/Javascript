
let num =[2,5,8,9]
let[a,b,...other] = num;
console.log({a});
console.log({b});
console.log({other});

let childPass = false
let promise = new Promise(function(resolve, reject){
   if (childPass){
    resolve("You Passed")
   }
   else{
    reject("You failed")
   }
})

.then(()=>console.log("You are a smart child"))
.catch((error)=>{
    console.log(error)
    console.log("It is okay to fail")
    return error
})
.finally(()=>console.log("You can be whoever you want to be"))
// console.log(promise)
async function main(){
    let boy = await promise;
    console.log(boy);
    console.log("Promises are fun");
}
main();
let person = {
    name: "Hallen",
    age:34,
    class: "Hopper Lab"
}
let{name, ...people} =person;
console.log(people)




