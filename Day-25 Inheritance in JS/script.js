// function anything() {
//     console.log('Inheritance ka Gyan..')
// }

// console.log(anything)
// console.log(anything.__proto__)
// console.log(anything.__proto__.__proto__)
// console.log(anything.__proto__.__proto__.__proto__)


// let arr=[1,2,3,4]
// console.log(arr.__proto__.__proto__.__proto__)


// const name=new String('Aman')
// console.log(name)
// console.log(name.__proto__.__proto__.__proto__)


// const obj={
//     name:'Tinku'
// }
// console.log(obj.__proto__.__proto__)



const human={
    eat:function () {
        console.log(`Human ${this.name} can Eat`)
    },
    sleep:function () {
        console.log('Human can sleep')
    }
}

const superHuman={
    name:'Chombu',
    fly:function(){
        console.log(`Super Human ${this.name} can fly.`)
    },
    code:function(){
        console.log(`Super Human ${this.name} can code.`)
    },
    __proto__:human
}

superHuman.__proto__=human

superHuman.code()
superHuman.eat()

console.log(superHuman)
console.log(superHuman.__proto__)