/*function Car(model,color,price){
    this.model=model;
    this.color=color;
    this.price=price;
}

const toyota=new Car('land crusier','black','2.5cr')
const hyundai=new Car('Verna','Black','13L')

console.log(toyota)
console.log(hyundai)*/



/*
function CompanyInfo(userId,compName,city){
    console.log('Comp Function is calling')
    this.userId=userId;
    this.compName=compName;
    this.city=city
}

function CreateEmployee(id,name,age,comp,city) {
    CompanyInfo.call(this,id,comp,city)
    this.name=name;
    this.age=age;
}

const employee=new CreateEmployee(1122,'Ankit',23,'ITC Infotect','Pune')
console.log(employee) */


// Nested Object

// const user=
// {
//     userId:1122,
//     userName:'Tinku',
//     company:
//        {
//           companyName:'ITC Infotech',
//           country:
//              {
//                countryName:'India',
//                 state:'Maharashtra',
//              city:'Pune'
//            }        
//     }
// }

function CreateCountry(countryName,state,city) {
    this.countryName=countryName;
    this.state=state;
    this.city=city
}

function CompanyInfo(companyName,countryName,state,city){
    this.companyName=companyName;
    this.country=new CreateCountry(countryName,state,city)
}

function CreateUser(userId,userName,companyName,countryName,state,city)
{
        this.userId=userId;
        this.userName=userName;
        this.company=new CompanyInfo(companyName,countryName,state,city)
}

const user1=new CreateUser(1122,'Tinku','ITC Infotech','India','Maharashtra','Pune')


console.log(user1)


