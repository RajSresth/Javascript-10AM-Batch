// 10. sort((a,b)=>a-b)

// let arr=[9,7,5,10,3,8,6,2,4,1]
// arr.sort((a,b)=>a-b)
// console.log(arr)

// For Ascending (a,b)=>a-b
// For Ascending (a,b)=>b-a

// 11. forEach(callback)
// const temp=[]
// const arr=[1,2,3,4,5]

// arr.forEach((value,index,array)=>{
//     let result=value*10
//     temp.push(result)
// })
// console.log(arr)
// console.log(temp)


// const arr=[10,20,30,40,50]
// let sum=0;

// arr.forEach(val=>{
//     sum=sum+val;
// })
// console.log(arr)
// console.log(`Sum is: ${sum}`)


// const arr=[100,200,300,400,500]
// const output=[10,20,30,40,50]


// const arr=[2,4,6,8,10]
// const output=[4,16,36,64,100]


// const arr=[1,2,3,4,5]
// const output=[1,2,6,24,120]
// const temp=[]

// function findFactorial(a){
//         let fact=1
//         for(let i=1;i<=a;i++){
//             fact=fact*i
//         }
//     return fact
// }

// arr.forEach(val=>{
//     let result=findFactorial(val)
//     temp.push(result)
// })
// console.log(temp)


// let arr=[1,2,3,4,5]
// arr.forEach((value,index,array)=>{
//     array[index]=value*10
// })
// console.log(arr)



// const arr=[1,2,3,4,5,6,7,8,9,10]

// const generic=(array,mid,n1,n2)=>{
    //   array.splice(0,mid).
    //   forEach((val,index)=>{
        //     array.splice(index,0,val*n1)
        //     })
        
        //     array.splice(mid,arr.length-mid)
        //     .forEach((val,index)=>{
            //         array[mid+index]=val*n2
            //     })
            
            //     return array
            // }
            // const a=+prompt('First Number')
            // const b=+prompt('Second Number')
            // const half=Math.floor(arr.length/2)
            // const output=generic(arr,half,a,b)
            // console.log(output)
            

// const arr=[1,2,3,4,5,6,7,8,9,10]

// const mid=Math.floor(arr.length/2) //5

// arr.forEach((val,index,array)=>{
//    if(index < mid){
//         array[index]=val*2
//    }
//    else{
//     array[index]=val*3
//    }
// })
// console.log(arr)


// let arr=[1,2,3,4,5]
// output=[1,4,9,16,25]

// const result=arr.map((val,index,array)=>val*10)
// console.log(arr)
// console.log(result)
    
// let arr=[1,2,3,4,5]
// output=[11,12,13,14,15]


// let marks=[100,90,80,70,60]
// let output=[50,45,40,35,30]

// write a js program to create a function which accepts an array and flat them into single array?
let array=[1,[2,3],[4,[5,6],7],[8,9],10]
let output=[1,2,3,4,5,6,7,8,9,10]
