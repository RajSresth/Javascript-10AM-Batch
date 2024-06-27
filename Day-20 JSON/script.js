// const myFeature={
//     feature:'Bubbles',
//     data:200,
//     details:{
//         sender:200,
//         status:'ok',
//         receiver:205,
//         status:'ok'
//     },
//     storage:['html','css','js'],
//     display:null
// }

// const stringObject=JSON.stringify(myFeature)
// console.log(stringObject)


// const normalObject=JSON.parse(stringObject)
// console.log(normalObject)


// const users=[
//     {
//         userName:'Sidhart',
//         age:17,
//         isMarried:false,
//         gender:'M'
//     }
//     ,
//     {
//         userName:'Chombu',
//         age:23,
//         isMarried:true,
//         gender:'M'
//     },
//     {
//         userName:'Chombi',
//         age:21,
//         isMarried:true,
//         gender:'F'
//     },
//     {
//         userName:'Vidhi',
//         age:19,
//         isMarried:true,
//         gender:'F'
//     },
//     {
//         userName:'Dinga',
//         age:24,
//         isMarried:true,
//         gender:'M'
//     },
//     {
//         userName:'Simba',
//         age:28,
//         isMarried:false,
//         gender:'M'
//     },
//     {
//         userName:'Tinku',
//         age:25,
//         isMarried:false,
//         gender:'M'
//     },
//     {
//         userName:'Rinki',
//         age:22,
//         isMarried:false,
//         gender:'F'   
//     },
//     {
//         userName:'Kiara',
//         age:27,
//         isMarried:false,
//         gender:'F' 

//     }
// ]


// 1. findout those users who is above 18 and married wrt to gender:(male,female)?
// const males=[]
// const females=[]
// users.map(val=>{
//     if(val.age>18 && val.isMarried===true && val.gender==='M'){
//        males.push(val.userName)
//     }
//     else if(val.age>18 && val.isMarried===true && val.gender==='F'){
//         females.push(val.userName)
//     }
// })

// console.log(males)
// console.log(females)


// 2. findout those user who is not married and above 18?
// const umUsers=[]
// users.map(val=>{
//     if(val.age>18 && val.isMarried===false){
//         umUsers.push(val.userName)
//     }
// })

// console.log(umUsers)



const shoppingCart=[
    {
        itemName:'nail polish',
        price:150,
        color:'pink'
    },
    {
        itemName:'Lipstick',
        price:500,
        color:'Brown'
    },
    {
        itemName:'Hair Straightner',
        price:3500,
        color:'Black'
    },
    {
        itemName:'Eye Liner',
        price:280,
        color:'Black'
    },
    {
        itemName:'Earings',
        price:1000,
        color:'gold'
    },
    {
        itemName:'Shoes',
        price:700,
        color:'White'
    },
    {
        itemName:'Foundation',
        price:4500,
        color:'Multi Color'
    }    
]

// Reduce
// const total=shoppingCart.reduce((acc,val)=>{
//     acc=acc+val.price
//     return acc
// },0)

// console.log('Total Price is: '+total+'/-Rs')


// Filter
const expensiveItems=[]
shoppingCart.filter(val=>{
    if(val.price>1000)
     {
            expensiveItems.push(val.itemName);
     }
})
    
console.log(expensiveItems)