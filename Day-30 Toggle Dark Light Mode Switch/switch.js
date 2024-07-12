const button=document.getElementById('button')


button.addEventListener('click',(e)=>{
    const main=document.querySelector('main')
    const header=document.getElementById('header')
    const sun=document.querySelector('.light')
    const moon=document.querySelector('.night')
    main.classList.toggle('darkMain')
    header.classList.toggle('darkHeader')
    sun.classList.toggle('show')
    moon.classList.toggle('hide')
    
})



