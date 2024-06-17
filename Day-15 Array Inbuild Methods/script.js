// 1. push()

// let arr=[1,2,3,4]
// const result=arr.push(5)
// console.log(arr)
// console.log(result)

// 2. pop()
// let arr=[1,2,3,4,5,6]
// const res=arr.pop()
// console.log(arr)
// console.log(res)

// 3. unshift()
// let arr=[2,3,4,5]
// const res=arr.unshift(1)
// console.log(arr)
// console.log(res)

// 4. shift()
// let arr=[10,2,3,4,5]
// const res=arr.shift()
// console.log(arr)
// console.log(res)

//5. includes(search_element,index)

// let movies=['PK','Race 3','golmal','All the best','3idiots','housefull']
// const res=movies.includes('PK')
// console.log(res)

// 6. indexOf(search_element,index)
// let apps=['snapchat','instagram','youtube','whatsaap','Tiktok']

// const iNum=apps.indexOf('snapchat',1)
// console.log(iNum)

// 7. splice(a,b,c)
       
// Insertion
// let arr=[10,20,30,60,70,80]
// const res=arr.splice(3,0,40,50)
// console.log(arr)
// console.log(res)

// Deletion
// let arr=[10,20,30,90,100,40,50]
// const res=arr.splice(3,2)
// console.log(arr)
// console.log(res)


// Updation
// let arr=[10,20,300,400,50]
// const res=arr.splice(2,2,30,40)
// console.log(arr)
// console.log(res)



// 8. slice(a,b)
// let movies=['pk','housefull','transformers','terminator','ghost rider','avengers','phir heera pheri']

// const actionFilms=movies.slice(2,5)
// console.log(actionFilms)

// let cartoons=['doraemon','gopi bahu','power rangers','sinchan','Nagin','Ben 10','Oggy','News','Ninja Hathori']

// cartoons.splice(0,9,'doraemon','power rangers','sinchan','Ben 10','Oggy','Ninja Hathori')

// console.log(cartoons)


// write a js program to create a function and pass the array as an argument and split array in 2 equal parts?

// let arr=[10,20,30,40,50,60,70,80,90,100]
// let arr1;
// let arr2;
// const splitArray=(a)=>{
//     const mid=Math.floor(a.length/2)
//     // 1st half
//     arr1=a.slice(0,mid)

//     //2nd half 
//     arr2=a.slice(mid)
// }
// splitArray(arr)
// console.log(arr1)
// console.log(arr2)



// 9. reverse()
// let arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)


let arr=[10,20,30,40,50,60,70,80,90,100]
let arr1;
let arr2;
let joinArray=[];


const splitArray=(a)=>{
    const mid=Math.floor(a.length/2)
    // 1st half
    arr1=a.slice(0,mid)

    //2nd half 
    arr2=a.slice(mid)
}
splitArray(arr)
arr1.reverse() //[50,40,30,20,10]
arr2.reverse() //[60,70,80,90,100]

// foreach(callback)
// foreach((val,index,array)=>{})

arr1.forEach((val)=>{
    joinArray.push(val)
});

arr2.forEach(val=>{
    joinArray.push(val)
})

console.log(joinArray)


