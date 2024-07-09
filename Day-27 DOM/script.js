const tag=document.getElementsByClassName("item");
console.log(tag)

console.log(tag[0].textContent)
tag[0].textContent="1. HTML"

tag[1].textContent="2. CSS"
tag[2].textContent="3. JavaScript"
tag[3].textContent="4. TailwindCSS"
tag[4].textContent="5. ReactJS"

// Convert htmlcollection into an array
const array=Array.from(tag)
const values=['html','css','js','react','tailwind']

array.forEach((val,i) => {
    val.textContent=values[i]
    val.style.color="red"
});

const li1=document.getElementById('one')
console.log(li1)

const li2=document.getElementById('two')
console.log(li2)