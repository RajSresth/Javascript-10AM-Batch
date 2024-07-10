// setAttribut("id","chombu")
// const heading=document.querySelector('h1');
// heading.setAttribute("id","main-heading")




// getAttribute("id")
// const input=document.querySelector('input')
// console.log(input.getAttribute("id"))


// removeAttribute(title)
// const div=document.querySelector('div')
// div.removeAttribute("title")


// parentElement
// const article=document.querySelector('#parent>article')
// article.parentElement.style.backgroundColor="black"
// article.parentElement.style.color="white"


// previousElementSibling
// const article=document.querySelector('#parent>article')
// article.previousElementSibling.style.color="red"


// nextElementSibling
// const article=document.querySelector('#parent>article')
// article.nextElementSibling.style.color="orangered"

// children
// const div=document.getElementById('parent').children
// let color=['red','blue','magenta']
// for(let i=0;i<div.length;i++){
// div[i].style.color=color[i]
// }

// childNodes
// const div=document.getElementById('parent')
// console.log(div.childNodes)


const main=document.querySelector('#parent>:last-child')
main.remove()