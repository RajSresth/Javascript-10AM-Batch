const form=document.querySelector('form')

function checkPrime(num){
    let count=0;

    for(let i=2;i<=Math.floor(num/2);i++)
    {
        if(num%i===0)
        {
            count++
        }
    }
    if(count===0)
    {
        return `${num} is Prime Number`
    }
    else{
        return `${num} is not a Prime Number`
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input=document.getElementById('input').value
    const heading=document.querySelector('h1')
    heading.textContent=`Result: ${checkPrime(input)}`
    
})