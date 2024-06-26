// Empty Object
// const user=new Object()
// console.log(user)

// const user=new Object({userName:'Ram',age:23,city:'Noida'})
// console.log(user)

// console.log(Object)

// Topic: Object Creation by using new Keyword and Constructor Function
// function CreateUser(userId,userName,logginCount)
// {
//     this.userId=userId;
//     this.userName=userName;
//     this.logginCount=logginCount;
// }

// const user1=new CreateUser(1122,"Chombu",2)
// const user2=new CreateUser(2233,"Tinku",5)
// console.log(user1)
// console.log(user2)


// Topic: Object creation using Class
// class User{

//     constructor(userId,userName,city)
//     {
//         this.userId=userId;
//         this.userName=userName;
//         this.city=city;
//     }
   
// }
// const user1=new User(1024,'Tinku','Noida')
// console.log(user1)



// const obj={
//     name:'Tinku',
//     age:27,
//     city:'Noida',
//     getDetails:function (a,b) {
//         console.log(this)
//         console.log(`User name is: ${this.name}`);
//         console.log(`Age is: ${this.age}`)
//         console.log(`City is: ${this.city}`)       
//         console.log(`Sum of ${a} and ${b} is: ${a+b}`)
//     }
// }

// obj.getDetails(5,5)




// const car={
//     name:'Scorpio N',
//     price:'30Lac',
//     color:'black',
//     carDetails:()=>{
//         console.log(`Car name is: ${car.name}`)
//         console.log(`Price is: ${car.price}`)
//         console.log(`Color is: ${car.color}`)
//     }
// }
// car.carDetails()


// Add a new Key value pair
// insert a key
// update a key
// delete a key
// Inspect a kay
// const student={
//     name:'Deepanshu',
//     roll:7,
//     "maths score":90,
//     city:'Rohini',
//     hobbie:'video games'
// }

// // Insert
// student.country='India'
// // Update
// student.city='Noida'

// // Delete
// delete student.hobbie
// console.log(student)

// // Inspect
// console.log("hobbie" in student)


// Topic: Nested Object


// const user={
//     userName:'Ankit',

//     country:{
//         countryName:'India',
//         state:{
//             stateName:'UP',     
//             city:'Noida'       
//         }
//     }
// }

// console.log(user.country.state.city)


// class User{
//     constructor(userName,country)
//     {
//         this.userName=userName;
//         this.country=country;
//     }
// }

// const user1=new User('Tinku',{countryName:'India',state:'UP'})
// console.log(user1)


// Topic: Shallow Copy
// const obj={
//     name:'Tinku',
//     age:24
// }

// const copy_obj=obj;
// copy_obj.age=204
// console.log(obj)
// console.log(copy_obj)

// Deep Copy

// Original Object
const obj={
    name:'Tinku',
    age:24
}

const copy_obj={}

// For in loop

for(element in obj)
    {
       copy_obj[element] =obj[element]
    }

    copy_obj.age=204
console.log(copy_obj)
console.log(obj)
