 const darkBtn=document.getElementById('dark')

darkBtn.addEventListener("click",()=>{
        setTimeout(() => {
            document.body.style.cssText="background-color:black;color:white:"
            
            darkBtn.style.cssText="background-color:white;color:black;"
        }, 2000);
})

