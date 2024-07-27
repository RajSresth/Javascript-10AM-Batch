// function printMeme(name="Ajay"){
//     console.log(name+" Gaddari Karbe..!!")
// }
// setTimeout(printMeme,2000)


// var a=1;   //sync

// console.log(a)  //sync  1
// console.log(a)  //sync  1
// console.log(a)  //sync  1

// setTimeout(()=>{
//     console.log("Namastey Developers")
// },6000)  //Async

// console.log("Line-13 "+a) //sync

let timer;
const startBtn=document.getElementById('start');
const stopBtn=document.getElementById('stop')

startBtn.addEventListener("click",function(){
    timer=setTimeout(function(){
        document.body.style.cssText="background-color:black;color:white;";       
    }, 1000);     
  
})

stopBtn.addEventListener("click",function () {
    document.body.style.cssText="background-color:white;color:black;"    
    clearTimeout(timer)
})




