//1. get Random Color Method
function getRandomColors(){
    const hexa='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color=color+hexa[Math.floor(Math.random()*16)]
    }
    return color;
}

//2. update color method
function updateColor(){
    const color=getRandomColors();
    const displayContainer=document.getElementById('displayColor');
    const input=document.getElementById('colorCode');
    input.value=color;
    displayContainer.style.backgroundColor=color
}

//3. start button
let id;
const startButton=document.getElementById("start");
startButton.addEventListener("click",()=>{
    id=setInterval(updateColor, 1000);   
})


//4. stop Button
const stopButton=document.getElementById("stop")
stopButton.addEventListener("click",()=>{
    clearInterval(id);    
})

//5. clear Button
const clearButton=document.getElementById("clear")
clearButton.addEventListener("click",()=>{
    clearInterval(id);
    const displayContainer=document.getElementById('displayColor');
    displayContainer.style.backgroundColor="white"
    const input=document.getElementById('colorCode');
    input.value="";
})


//6. copy button
const copyButton=document.getElementById("copy")

// 7. copy color code method
function copyColorCode(){
    const input=document.getElementById("colorCode");

    input.focus()
    input.select()

    navigator.clipboard.writeText(input.value)
    .then(function(){
        alert("Copied to Clipboard: "+input.value)
    })
    .catch(function(){
        alert("Failed to cpy the color code.")
    })
}
copyButton.addEventListener("click",copyColorCode)