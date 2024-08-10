let count=1;


const id=setInterval(()=>{
    console.log(`Jai Shree Ram-${count++}`)
},1000);



setTimeout(function (){
    clearInterval(id)
}, 5500);




