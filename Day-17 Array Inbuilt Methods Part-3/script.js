// let arr=[18,28,38,48,58,68,78,88]

// const output=arr.filter(val=>val>30)
// console.log(output)

// const output=arr.filter((val,index)=>{
//     return (index>3 && val>30)
// })
// console.log(output)

// let arr=[18,28,38,48,58,68,78,88]
//     const output=arr.filter(val=>(val%8===0 && val%10===8))
//     console.log(output)


// write a js program to find array of prime number?
// let arr=[10,6,12,14,19,7,34,29]
// let primeNo=[]
// const checkPrime=(n)=>{
//     let count=0;
//     for(let i=2;i<=Math.floor(n/2);i++)
//         {
//             if(n%i===0)
//             {
//                 count++
//             }
//         }
//     if(count===0){
//         return n
//     }
// }

// const output=(arr)=>{
//     arr.sort((a,b)=>a-b)
//     arr.map(val=>{
//         const temp=checkPrime(val)
//         if(temp!==undefined){
//             primeNo.push(temp)
//         }
//     })
// }

// output(arr)
// console.log(primeNo)


// let arr=[10,6,12,14,19,7,34,29]


// const checkPrime=(n)=>{
//     let count=0;
//         for(let i=2;i<=Math.floor(n/2);i++)
//             {
//                 if(n%i===0)
//                 {
//                     count++
//                 }
//             }
//         if(count===0){
//             return n
//         }
// }

// const output=(array)=>{
//     array.sort((a,b)=>a-b)

//     array.filter(val=>{
//         const temp=checkPrime(val)        
//         if(temp!==undefined){
//             primeNo.push(temp)
//         }

//     })
// }

// output(arr)
// console.log(primeNo)


// 15. Array.isArray()

// let a='Ram'
// let b={}
// let c=[1,2,3]
// console.log(Array.isArray(a))
// console.log(Array.isArray(b))
// console.log(Array.isArray(c))

// 16. Array.from()

// let name="Hrithik"

// let obj={
//     name:'Hrithik',
//     age:43
// }

// const res=Array.from(obj.age)
// console.log(res)


// let arr=[1,2,3,[4,[5,6,[7,8],9],10],11]
// let output=[1,2,3,4,5,6,7,8,9,10,11,12]

// flat()

// const output=arr.flat(3)
// console.log(output)

// const output=arr.flat()
// console.log(output)


let arr=[1,[2,3],4,[5,6,[7,8],9],10,[11,12]]
let newArr=[]
const flatArray=(array)=>{

    array.map(val=>{
        if(Array.isArray(val)){
            flatArray(val)
        }
        else{
            newArr.push(val)
        }
    })
}
flatArray(arr)
console.log(newArr)

