const startButton=document.getElementById('start')
const stopButton=document.getElementById('stop')
let count=1;
let intervalId;

startButton.addEventListener("click",()=>{
    intervalId=setInterval(() => {
        console.log(`Namaste Developers..${count++}`)
    }, 1000);
})

stopButton.addEventListener('click',()=>{
    console.log(intervalId)
    clearInterval(intervalId)
})

