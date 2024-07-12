const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email=document.getElementById('email').value
    const password=document.getElementById('pass').value
    const emailError=document.getElementById('emailErr')
    const passwordError=document.getElementById('passErr')
    if(email==="" || isNaN(email)===true){
        emailError.textContent="Please enter valid email address"
    }
    if(password==="" || isNaN(password)===true){
        passwordError.textContent="Please enter valid password"        
    }
})