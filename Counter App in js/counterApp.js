const inc=document.getElementById("incr")
const dec=document.getElementById("decr")
const res=document.getElementById("reset")
const display=document.querySelector("span")
let count=0;
display.textContent=count;

function increment(){
    count++;
    display.textContent=count;
}
function decrement(){
    count--;
    display.textContent=count;
}
function reset(){
    count=0;
    display.textContent=count;
}


inc.addEventListener("click",()=>{
   setTimeout(() => {
    increment()
   }, 200);     
})
dec.addEventListener("click",()=>{
    setTimeout(() => {
        decrement()
    }, 200);       
})
res.addEventListener("click",()=>{
    setTimeout(() => {
        reset()
    }, 200);
})