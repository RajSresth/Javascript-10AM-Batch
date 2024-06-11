//     function outer() 
//     {
//         console.log("Inside Outer Function...")

//         function inner()
//         {
//             console.log("Inner Function")
           
//         }
//         inner()
//     }


// outer()




// function parent()
// {
//     console.log("Parent Function..")

//     function child() 
//     {
//         console.log("Child Function..")
//     }
//     child()
// }
// parent()



// function dadaji()
// {
//     console.log("Dadaji is Calling")

//     function pitaji()
//     {
//         console.log("Pitaji is Calling")

//         function child() {
//             console.log("Child Function")
//         }
//         child()
//     }
//     pitaji()
// }

// dadaji()


// function movie() {
//     console.log("Going for a Movie..")

//    function category() {
//     console.log("Action and Thriller")
//    }

//     return category;
// }

// let res=movie()
// res()
// console.log(res)


// Lexical Scope

const actor='Salmon Bhai'

function movie() 
{
    console.log('Going for a Movie')

    function category() 
    {
            console.log('Actor Name is: '+actor)
            console.log("RIP Physics...")    
    }
    return category
}

const result=movie() 
console.log(result)
result()



// Closure





