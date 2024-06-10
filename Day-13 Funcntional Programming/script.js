// function generic(task,value)
// {
//    return task(value)
// }

// generic(function(name){
//                 console.log(`User name is: ${name}`)
//          },"Sumit")



// Higher Order Function
// function calculator(task,a,b){
//         console.log(task(a,b))
        
// }


// // Call Back Functions
// let sum=(a,b)=>a+b;
// let sub=(a,b)=>a-b;
// let prod=(a,b)=>a*b;
// let div=(a,b)=>a/b;
// let pow=(a,b)=>a**b;

// calculator(prod,10,20)


// HOF
// function calculator(task,a,b) {
//    console.log( "Sum is: ",task(a,b))
// }

// CBF
// function sum(a,b){
//     console.log("Sum is:",a+b)
// }

// function sub(a,b){
//     console.log("Sub is:",a-b)
// }
// function prod(a,b){
//     console.log("Product is:",a*b)
// }

// let sum=(a,b)=>a+b;
// let sub=(a,b)=>a-b;
// let prod=(a,b)=>a*b;


// calculator(sub,10,2)


// CBF
let sum=(a,b)=>console.log("Sum is: ",a+b);
let sub=(a,b)=>console.log("Sub is: ",a-b);
let prod=(a,b)=>console.log("Prod is: ",a*b);


// HOF
function calculator(task,a,b) {
    console.log(task,typeof task)
    switch (task) {
        case 'sum':
            sum(a,b)
            break;
        case 'sub':
            sub(a,b)
            break;
        case 'prod':
            prod(a,b)
            break;
        default:
            console.log("Unkown Task you are entering..")
            break;
    }
}

// User input
const m=+prompt('Enter First Number')
const n=+prompt('Enter Second Number')
const operation=prompt('Enter your task: sum, sub, prod')

calculator(operation,m,n)
