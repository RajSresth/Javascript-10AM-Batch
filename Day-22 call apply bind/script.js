/* Topic: call()
function getDetails(comp,salary){
    console.log(this)
    console.log('User Id: '+this.userId)
    console.log('User Name: '+this.userName)
    console.log('City: '+this.city)
    console.log('Company Name: '+comp)
    console.log('Salary '+salary)
}

const user={
    userId:1122,
    userName:'Manan',
    city:'Noida'
}

const user2={
    userId:2233,
    userName:'Tinku',
    city:'Gurugram'
}

 getDetails.call(user,'ITC infotech',20000)

 getDetails.call(user2,'Virtusa',25000) */


//  Topic: apply()

/*
function getDetails(comp,sal){
    if(this.age>18 && this.age<60){
        console.log('Company :'+comp+' and salary: '+sal);
        return `${this.name} you are eligible to work`
    }
    else if(this.age>60){
        return `${this.name} you are senior citize`
    }
    else if(this.age>13){
        return `${this.name} you are student go for internship`
    }
    else{
        return `${this.name} you are a kid`
    }
}


const person1={
    name:'Rohan',
    age:16
}
const person2={
    name:'Simba',
    age:24
}

const res=getDetails.apply(person2,['xyz',20000])
console.log(res) */


// Topic: bind()

/*
function getResponse(){   
        console.log(`Name is: ${this.name}`)
        console.log(`Age is: ${this.age}`)   
}

const user1={
    name:'Samay',
    age:24    
}

const output=getResponse.bind(user1)
output() 
*/




