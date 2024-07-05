/*
const animal={
    speak:function (){
        console.log(`Animal name is ${this.name} and make sound of ${this.sound}`)
    }
}

const dog={
    name:'Sheero',
    sound:'Bhaooow bhaooow'
}

dog.__proto__=animal

console.log(dog.__proto__===animal)
 */

/* Topic-2 : setPrototypeOf()

const person={
    fname:'Sarthak',
    lname:'Malik',
    city:'Meerut',
    age:23,
    getFullname:function(){
        return ` ${this.fname} ${this.lname}`
    }
}

const employee={
    desg:'SDE',
    sal:'15LPA',
}

Object.setPrototypeOf(employee,person)

console.log(Object.getPrototypeOf(employee))

const heritedObj=Object.getPrototypeOf(employee)
console.log(heritedObj)
console.log(heritedObj===person) */


/* Topic-3 Object.create()
const animal={    
    speak:function (){
        console.log(`Animal name is ${this.name} and make sound of ${this.sound}`)
    }
}

const properties={
    name:{
        value:'Tommy',
        writable:false,
        enumerable:false,
        configurable:false
    },
    sound:{
        value:'Bark',
        writable:true,
        enumerable:true,
        configurable:true
    }
}

const newPet=Object.create(animal,properties)

delete newPet.sound
console.log(newPet)*/



