class Human{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`Human ${this.name} can Eat`)
    }
    sleep(){
        console.log(`Human ${this.name} can Sleep`)
    }
}

class Superhuman extends Human{
    constructor(name,age,city,isWorking){
       super(name)
        this.age=age;
        this.city=city;
        this.isWorking=isWorking;
    }
    code(){
        console.log(`Super Human ${this.name} can code`)
    }
    
}

const person1=new Superhuman('Sarthak',217,'Meerut',false)
console.log(person1)

person1.eat()