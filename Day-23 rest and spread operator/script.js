/* Topic: Spread Operator inside object

const person={
    name:'Chombu',
    age:24,
    skill:['FE','BE']
}

const employee={
    company:'ITC',
    salary:20000,
    desg:'React, Node',
    ...person
}
console.log(employee)*/

/* Topic-2: spread operator inside array

let oldSongs=['Gulabi Ankhein','Dheere Dheere','Das Bahane']


let playlist=['Brown Rang','You and Me','GOAT',...oldSongs]
console.log(playlist)*/


/* Tipic-3: spread operator inside function

let arr=[10,20,30,40]

function findSum(a,b,c,d){
    return (a+b+c+d);
}

// spread operator
const result=findSum(...arr)
console.log(result) */



// Rest Operator

/* Topic-1 Rest operator inside object 
const country={
    countryName:'India',
    state:'UP',
    city:'Noida',
    pincode:201301,
    phone:'+91-'
}

const {state,pincode,...temp}=country
console.log(state)
console.log(pincode)
console.log(temp)

*/


 /* Topic-2 Rest operator inside array

 let travelling=['Kedarnath','Rameshwara','Mahakaleshwar','Dwarka','Jagannath']


 const [a,b,,...c]=travelling
 console.log(a)
 console.log(b)
 console.log(c)
 */


/* Topic-3 Rest operator inside function 

const a=10;
const b=20;
const c=30;
const d=40;
const e=50

// Parameter- rest operator
const calculate=(...temp)=>{
   const sum= temp.reduce((acc,val)=>{
        acc=acc+val
        return acc
    },0)
    return sum
}

console.log(calculate(a,b,c,d,e))*/



/* Topic: Rest and Spread Operator together inside a function
const arr=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]

// Rest operator
const calculate=(...temp)=>{
    const sum=temp.reduce((acc,val)=>acc+val,0)
    return sum
}


// spread Operator
console.log(calculate(...arr))*/



// const user={
//     name:'Tinku',
//     age:20,
//     isWorking:false,
//     city:'Rohini'
// }

// // rest operator-parameter
// function getDetails(...obj){
//    console.log(obj)
// }


// // spread operator-function call
// getDetails(user)


const item1={
    name:'Eye Liner',
    price:500
}
const item2={
    name:'Hair Straightner',
    price:3500
}
const item3={
    name:'Dress',
    price:12000
}
const shoppingCart=[item1,item2,item3]

// Rest operator
function calculate(...cart){
    const total=cart.reduce((acc,val)=>{
        acc=acc+val.price
        return acc
    },0)
    return total;
}

// Spread Operator
const res=calculate(...shoppingCart)
// const res=calculate(item1,item2,item3)
console.log(`Total Price is: ${res}/-`)


