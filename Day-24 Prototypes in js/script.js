function Car(name,model,color){
    this.name=name;
    this.model=model;
    this.color=color
}

Car.prototype.color='Black'

Car.prototype.drive=function(){
    console.log(`I am Driving ${this.name} and model is ${this.model}`)
}

const car1=new Car('Mustang',1969,'Blue')
const car2=new Car('Supra','MK5','white')

console.log(car1)
console.log(car2.color)
car2.drive()




