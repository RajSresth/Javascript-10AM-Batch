let counter=0;
function getData(){
    console.log("Function Called "+counter++);
}

function myDebounce(callback,delay) {
    let timeId;
    
    return function(...args){
        console.log("Current timeId:", timeId);
        if(timeId){           
            console.log("Clearing timeout");
            clearTimeout(timeId)
        }
        else{
            console.log("No timeout to clear");
        }
        timeId=setTimeout(() => {
            callback()        
        }, delay);
    }
}
const myFun=myDebounce(getData,1000)

/* Drawback
let counter=1;
function getData(){
    console.log("Function Called "+counter++);
}
*/
let count=1
function provideData(){
    const button=document.getElementById('btn')
    button.disabled=false
    console.log("User Clicked.."+count++)
}

function myThrottle(call,delay){
    return function(...args){
        document.getElementById('btn').disabled=true
        setTimeout(() => {
            call()
        }, delay);
    }
}
const task=myThrottle(provideData,2000)


/* Drawback
let count=1
function provideData(){
    console.log("User Clicked.."+count++)
}
    */