// question1
console.log("start")
var a=10;
let b=20;
const c=30;
        {
            var a=100;
            let b=200;
            const c=300;
            console.log(a)
            console.log(b)
            console.log(c)
        }
console.log(a)
console.log(b)
console.log(c)
console.log("End")


// question2
console.log("start")
    let a=10
    {
        a=100;
        let a=100;
        console.log(a)
    }
console.log(a)
console.log("end")