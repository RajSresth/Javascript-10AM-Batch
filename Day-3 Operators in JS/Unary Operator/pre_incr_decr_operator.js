// question-1
// let a=1;
// a=++a;
// a=++a;
// a=++a;
// let b=2;
// b=++b
// b=++b
// console.log(a)
// console.log(b)


// question-2
// let a=1;
// a++;
// a=a++;
// let b=2;
// b=b++;
// b=--a + a++ + b++;
// b=--b;
// b=b++;
// console.log(a)   :- 2
// console.log(b)   :-3


// question-3
// let a=1;
// a=a++;
// a=a++;
// a=a++;
// a=a++;
// console.log(a)
// let b=2;
// b=b++ + a++;
// b=b++;
// b=b++;
// console.log(a++)
// console.log(b++)


// question-4
// let a=1;
// a=a++;
// a=a++;
// a=a++ + a++;
// console.log(a)
// console.log(a++)
// console.log(a)


// question-5
// let a=1;
// let b=2;
// a=++a + a++;
// b=--b + b++ + a++;
// let c=b++ + a++ + --b;
// c=--c + c++;
// c=++c + --a + b++;
// b=b++;
// a=a++;
// c=c++;
// console.log(a)
// console.log(b)
// console.log(c)

// question-6
// let m=5;
// m--;
// m=m--;
// m=m-- + m++ + ++m;
// console.log(m)
// console.log(m--)
// console.log(m)

// output: 12 12 11

// question-7
let x=10;
let y=5;
x=++x + x-- + x++;
y=x++ + ++y + y--;
y=y--/2
y=y-- + ++y + --x;
let z=y++ + x++ + --y
z=--z/2 + z++/2
console.log(x)
console.log(y)
console.log(z)

// output:- 33 208 1788



