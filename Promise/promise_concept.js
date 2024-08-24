/*let promiseOne=new Promise(function(resolve,reject){
    console.log("Promise Task-1")
    reject()
})

console.log(promiseOne) */

/*
let promiseTwo=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Me apse kuch mang sakta hu kya..!!")
        resolve()
        reject()
    }, 5000);
})

console.log(promiseTwo) */

/*
let promise3=new Promise((resolve,reject)=>{
    console.log("Aync Task-3");
    resolve("Successfull....!!")
})


console.log(promise3)

promise3.then(function(response){
    console.log(response)
}) */


let promise4=new Promise((resolve,reject)=>{
    console.log("Async Task-4");
    let reply="yes";

    if(reply==="yes"){
        console.log("Angel priya fall in love")
        resolve("Mele babu ne thana thaya..")
    }
    else{
        console.log("Angel Priya replied no...")
        reject("I have a boyfriend")
    }
})

promise4
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("Vo stree h kuch bhi kar sakti h..!!")
})
