// Global Scope

// var a=10;

//         {
//             console.log(a)
//             {
                
//                 console.log(a)
//             }
//         }
// console.log(a)

// variable declare with var is global scoped.

var a=10;

// block-1
    {
        var a=100;
        {
            var a=1000
            console.log(a)
        }
        console.log(a)

    }

console.log("Outside Block",a)