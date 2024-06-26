// Topic: Object Inbuild Methods

// const obj={
//     name:'Tinku',
//     age:25,
//     city:'Noida'
// }

// const key_names=Object.keys(obj)
// console.log(key_names)

// const values_array=Object.values(obj)
// console.log(values_array)

// const output=Object.entries(obj)
// console.log(output)

// const temp=Object.fromEntries(output)
// console.log(temp)



// Object.assign(target,s1,s2...sn)

// const tagret={
//     name:'Tinku',
//     age:21,
// }

// const source1={
//     state:'UP',
//     city:'Noida'
// }

// const source2={
//     country:'India',
//     pincode:110006,
//     city:'delhi'
// }

// const result=Object.assign({},tagret,source2,source1)
// console.log(result)


// Object.freeze(obj_ref)
// const user={
//     userName:'Chombu',
//     age:27,
//     salary:150
// }

// Object.freeze(user)
// No Insertion, No Updation,No Deletion
// user.city="Noida"
// user.salary=1500
// delete user.age

// console.log(Object.isFrozen(user))

// const user={
//     userName:'Chombu',    
// }

// Object.defineProperty(user,"city",{value:"Noida",
//                                     writable:true,
//                                     enumerable:true,
//                                     configurable:true
//                                     })


// writable:true
// user.city="Delhi"

// enumerable:true
// const result=Object.entries(user)
// console.log(result)


// Object.defineProperty(user,"city",{value:'Delhi'})
// console.log(user)

// const user={
//     userName:'Chombu',    
// }
// Object.defineProperties(user,{"city":{
//                                       value:'Noida',
//                                       writable:true,
//                                       enumerable:false,
//                                       configurable:false
//                                      },
//                              "state":{
//                                         value:'UP',
//                                         writable:false,
//                                         enumerable:true,
//                                         configurable:false
//                                     }})
// console.log(user)

// Topic: Object.seal(obj_ref)
// const user={
//     userName:'Its_Tinku',
//     age:24
// }

// Object.seal(user);
// No Insertion
// user.city="Noida"

// Updation Possible
// user.userName="ImTinku"

// No Deletion
// delete user.age

// console.log(Object.isSealed(user))
// console.log(user)

// Topic: Object.preventExtensions(obj_ref)
// const user={
//     userName:'Its_Tinku',
//     age:24
// }

// Deletion Possible
// Updation Possible
// No Insertion
// Object.preventExtensions(user)
// console.log(Object.isExtensible(user))
// console.log(user)

// Topic: hasOwnProperty()
// const user={
//     userName:'Its_Tinku',
//     age:24
// }
// console.log(user.hasOwnProperty('city'))
