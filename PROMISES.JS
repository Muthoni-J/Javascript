//new keyward inisiasiates
// stages of promise pending,failed,reject
let childPass = true
let promise = new Promise(function(resolve,reject){
    if (childPass){
    resolve("You passed")
    }
    else{
        reject("You failed")
    }
})
console.log(promise);


// promise chaning is console
// then ,catch,finally
let ChildPass = true
let Promise = new promise(function(resolve,reject){
    if (childPass){
    resolve("You passed")
    }
    else{
    reject("You failed")
    }
})
// or sepate in same lines
.then(()=> console.log("You are a smart child"))
.catch((error)=>{
    console.error();
    console.log("It is okay to fail")
})
.finally(()=> console.log("You can be who you want"))
// or sepate in different lines
console.log(Promise);

