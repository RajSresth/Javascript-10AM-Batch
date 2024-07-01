// 'use strict'

/* Topic1: calling this by itself
 console.log(this)

output in browser:- window object
output in nodejs:- empty object{} */

/*Topic2: calling this inside a function

 function getFullname(){
    console.log(this)
 }

 getFullname()*/


// Topic-3:calling this inside an object

/*const obj={
    fname:'Tony',
    lname:'Stark',
    getFullname:function(){
        console.log(this)
        return `${this.fname} ${this.lname}`
    }
}

obj.getFullname()*/


// Topic-4 calling this inside an arrow function

/*const obj={
    fname:'Captain',
    lname:'America',
    getFullname:()=>{
        console.log(this)
        return `${this.fname} ${this.lname}`
    }
}*/

/*const obj={
     fname:'Captain',
     lname:'America',
     getFullname:()=>{
         console.log(obj)
         return `${obj.fname} ${obj.lname}`
     }
 }
 const res=obj.getFullname()
 console.log(res)*/


//Topic-5: calling this inside a function after applyin use strict
/*function name(params) {
    console.log(this)
}
name()*/
// Output:- undefined