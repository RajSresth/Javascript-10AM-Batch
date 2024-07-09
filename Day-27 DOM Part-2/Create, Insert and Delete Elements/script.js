/*const body=document.body
body.style.backgroundColor="#313131";
body.style.color="#fff"


 Create heading tag
const heading=document.createElement('h1')

heading.textContent="Hello World..!"


 Insert heading inside body tag as last child

body.appendChild(heading)*/


// const head=document.createElement('h1')
// const ptag=document.createElement('p')

// head.textContent="Learning DOM"
// ptag.textContent="Like, Share and Subscribe"


// const div=document.querySelector('#container')
// div.insertAdjacentElement("beforebegin",head)

// const tag=document.querySelector('#div2')
// tag.insertAdjacentElement("afterend",ptag)


/* How to add list items as first child or last child
const list=document.querySelector('ul');

const firstList=document.createElement('li');
const lastList=document.createElement('li')
firstList.textContent="HTML"
lastList.textContent="JavaScript"


list.insertAdjacentElement("afterbegin",firstList)
list.insertAdjacentElement("beforeend",lastList)
*/

/* How to add list items inbetween childs
const midLi=document.createElement('li')
midLi.textContent="JavaScript"

const previousLi=document.querySelector('ul :first-child')
previousLi.insertAdjacentElement("afterend",midLi)
*/


// const div=document.createElement('div')
// div.innerHTML="Failure is the key to <strong>Success</strong>"

// const body=document.body
// body.insertAdjacentElement('afterbegin',div)

let name=prompt('Enter your name');

const div=document.createElement('div')
div.innerHTML=`<strong>${name}</strong> Bhai vo tujhe hi dekh rahi h...`

const body=document.body
body.insertAdjacentElement('afterbegin',div)