/* Topic: Spread Operator for destructuring 
const person={
    userName:'Chombu',
    age:23,
    skills:['Web','sql','python','java']
}


const employee={
    compName:'Tech hybrid',
    desg:'SDE',
    ...person
}

console.log(employee)  */

/*Topic: Spread operator in array destructuring */

// let OldFav=['All the best','Dhammal','Welcome','Dhol','Golmal']


// let newFav=['Intersteller',...OldFav]
// console.log(newFav)


// Topic: spread operator inside a function

let arr=[10,20,30,40,50]


function printSum(a,b,c,d,e){
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
}
printSum(...arr)
// printSum(10,20,30,40,50)