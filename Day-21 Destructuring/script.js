/*const obj={
    item:'Kit kat',
    price:30,
    flavour:'Chocolate'
}

const {item,price,flavour}=obj
console.log(item)
console.log(price)
console.log(flavour)*/

// Topic: Nested Destructuing
/*const user={
    userName:'Chombu',
    age:24,
    country:{
        countryName:'India',
        state:'UP',
        city:'Noida'
    }
}

const {userName,age,country}=user
const {countryName,state,city}=country

console.log(countryName)
console.log(state)
console.log(city)*/


// Topic: 2nd way of Nested Destructuring
/*const user={
    userName:'Chombu',
    age:24,
    country:{
        countryName:'India',
        state:'UP',
        city:'Noida'
    }
}

const {userName,age,country:{countryName,state,city}}=user
console.log(countryName)*/


/*const employee={
    name:'Joe',
    age:26,
    hobbies:{
        sing:true,
        playGame:function(game){
            console.log(`Playing ${game}`)
        }
    }
}
const {hobbies:{playGame}}=employee
playGame('Mini Militia')*/


// Topic: Individual Destructuring
/*const user={
    userName:'Tinku',
    age:24,
    country:{
        countryName:'India',
        state:'Up',
        city:'Noida',
    },
    atmPin:4132
}

const {country:{city,state,countryName}}=user
console.log(city)
console.log(state)
console.log(countryName)*/


// Array Destructuring
/*const youtubers=['Carry Minati','BB ki Vines','Ashish Chanchalani','Elvish Yadav','Puneet Superstar','Manish Rani']

const [a,,,b,,c] =youtubers

console.log(a)
console.log(b)
console.log(c)*/


// Topic: Nested Array Destructuring
/*const movie=[['Dunkey','SRK'],['Jawan','SRK'],['Race-3','Salmon'],['Kesari','Akshay']]

const [a,b,c,d]=movie
const [name,actor]=a
console.log(name)
console.log(actor)*/



// Topic: 2nd way of Nested Array Destructuring
/* const movie=[['Dunkey','SRK'],['Jawan','SRK'],['Race-3','Salmon'],['Kesari','Akshay']]

const [[movie1,actor1],[movie2,actor2],[movie3,actor3],[movie4,actor4]]=movie
   // const [,,,[movie1,actor1]]=movie
console.log(movie1)
console.log(actor1)
console.log(movie2)
console.log(actor2)
console.log(movie3)
console.log(actor3)
console.log(movie4)
console.log(actor4) */



// Topic: Destructuring in Function
/*let users=['Tinku','Dinga','Chombu']
function provideJob([user1,user2,user3])
{
    console.log(user1)
    console.log(user2)
    console.log(user3)
}
provideJob(users)*/



// Topic: Destructuring of Object in a function

// const user={
//     userName:'Chombu',
//     age:24,
//     city:'Noida',
//     isWorking:false
// }

// function provideJob({userName,age,city,isWorking}){
//     console.log(`User Name is ${userName}`)
//     console.log(`Age is ${age}`)
//     console.log(`City: ${city}`)
//     console.log(`Working status: ${isWorking}`)
// }
// provideJob(user)


// const movie={
//     name:'Kalki',
//     actor:['Amitabh Bachan','Prabhas','Kamal Hasan','Vijar Devrakonda','Dulqar salman'],
//     actress:['Deepika Padukon','Mrunal Thakur'],
//     price:350,
//     type:['action','thriller','superficial','comedy','hindu mythology']
// }

//  const app=({name,actor,actress,price,type})=>{
//     console.log(name)
//    const [a,b,c,d,e]=actor
//     console.log(a,b,c,d,e)
//     console.log(price)
// }

// app(movie)


// Topic: Destructing Advaced
const courses=[
    {
        name:'Java Fullstack',
        price:35000,
        duration:'5-Months',
        skills:['sql','java','web','adv java','python','mongoDb']
    },
    {
        name:'Mern Stack',
        price:35000,
        duration:'4-Months',
        skills:['web','node','express','mongoDb']
    },
    {
        name:'Python Fullstack',
        price:35000,
        duration:'5-Months',
        skills:['sql','python','web','Django','mongoDb']
    },
    {
        name:'Android Developement',
        price:50000,
        duration:'6-Month',
        skills:['Java','Kotlin','Native Script','Flutter','React Native']
    }
]

// console.log(result) //{name:'Android Developement'}

/* courses.map(({name,price,duration,skills})=>{
      skills.filter(val=>{
        if(val==='python')
            {
                console.log(name)
            }
      })
 })
 */


/* const result=[]
 courses.map(({name,price})=>{
    if(price>=50000){
            result.push(
                {name}
            )
    }
 })

 console.log(result) */


const result=courses.reduce((acc,val,index)=>{
    const {name,price}=val;
    if(price>=30000)
    {
     acc[`name${index}`]=name; 
    }
    return acc
},{})

console.log(result)


 