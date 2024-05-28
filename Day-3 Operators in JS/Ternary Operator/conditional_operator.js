// wajsp to find biggest of three numbers

// let a = +prompt('Enter first Number')
// let b = +prompt('Enter second Number')
// let c = +prompt('Enter third Number')

// const result = a > b ? a : b
// const output = result > c ? result : c


// const finalOutput = (a > b ? a : b) > c ? (a > b ? a : b) : c;


// write a js program to find leap year using conditional operator?

// write a js program to find the number is divisble by 8 and ends with 8 or not?

// write a js program to find whether a person is eligible to vote or senior citizen or children or school student

// 60:- senior citizen
// 18-59:- eligible to vote
//13-17:- school student
//6-12:- children
// 3-5:- kid


const age = +prompt('Enter Your age');

const voteResult = ((age >= 18 && age < 60) ? "Eligible to vote" :
  (age > 59) ? "Senior Citizen" :
    (age >= 13) ? "School Student" :
      (age >= 6) ? "Children" :
        (age >= 3) ? "kid" : "Unkown Error");

console.log(voteResult)
