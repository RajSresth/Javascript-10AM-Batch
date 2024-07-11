const form=document.querySelector('form')

const findPower=(a,b)=>{
    let pow=1;
    for(let i=1;i<=b;i++){
        pow=pow*a;
    }
    return pow
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const base=document.getElementById('base').value
    const expo=document.getElementById('exponent').value
    const span=document.querySelector('span')
    span.textContent=`${findPower(base,expo)}`
})