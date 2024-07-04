/* function Car(name,model,price){
    this.name=name;
    this.model=model;
    this.price=price;
}

Car.prototype.sound='High Bass'
Car.prototype.drive=function(){
    console.log(`I am Driving ${this.name} and model: ${this.model}`)
}
Car.prototype.playSong=function (song) {
    console.log(`Hey Alexa Play ${song}`)
    switch (song) {
        case 'blue eyes':
            console.log('Playing Blue eyes song')
            break;
    
        case 'brown rang':
            console.log('Kudiye ni tere brwon rang de')
            break;
        default:
            console.log('Radio is Playing...')
            break;
    }
}

const car1=new Car('Tesla','Y','75 Lakh')
const car2=new Car('Thar','4X4','18 Lakh')

console.log(car1)
console.log(car2)

car1.drive()
car1.playSong('brown rang')
console.log(car1.sound)

*/


// Topic: Create our own custom properties and methods inside an array


/*
Array.prototype.color='Red'

Array.prototype.sum=function () {
    let total=0;
    for(let i=0;i<this.length;i++){
        total=total+this[i]
    }
    return total;
}

let arr=[1,2,3,4,5]

const output=arr.sum()
console.log(output)




let newArr=[10,20,30,40,50]
console.log(newArr.sum()) */

//Topic-3 Create our own map method


Array.prototype.customMap=function(callback){
    const newArr=[];

    for(let i=0;i<this.length;i++){
        newArr[i]=callback(this[i],i,this)
    }
    return newArr;
}

let arr=[1,2,3,4,5]

const res=arr.customMap(val=>val*10)
console.log(res)




