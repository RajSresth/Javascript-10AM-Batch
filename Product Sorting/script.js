const start=document.getElementById("fetch")
const high=document.getElementById("high")
const low=document.getElementById("low")
const cardContainer=document.querySelector('.container')
let arr;
let cards="";

async function fetching(){
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json();
    return data;
}

start.addEventListener("click",async ()=>{
    arr=await fetching()

    arr.map(value=>{
        // Destructuring
        const {id,category,price,image}=value;
        cards=cards+`<div class="card">
                        <div class="profile">
                            <img src="${image}" alt="">
                        </div>
                        <h2>Id: ${id}</h2>
                        <p><b>Category:</b> ${category}</p>
                        <p><b>Price:</b> ${price}</p>
                    </div>`

        cardContainer.innerHTML=cards;
    })
})


high.addEventListener("click",()=>{
        cards=""
        arr.sort((a,b)=>b.price-a.price)
        arr.map(value=>{
            const {id,category,price,image}=value;
            cards=cards+`<div class="card">
                            <div class="profile">
                                <img src="${image}" alt="">
                            </div>
                            <h2>Id: ${id}</h2>
                            <p><b>Category:</b> ${category}</p>
                            <p><b>Price:</b> ${price}</p>
                        </div>`    
            cardContainer.innerHTML=cards;
        })
})


low.addEventListener("click",()=>{
    cards=""
    arr.sort((a,b)=>a.price-b.price)
    arr.map(value=>{
        const {id,category,price,image}=value;
            cards=cards+`<div class="card">
                            <div class="profile">
                                <img src="${image}" alt="">
                            </div>
                            <h2>Id: ${id}</h2>
                            <p><b>Category:</b> ${category}</p>
                            <p><b>Price:</b> ${price}</p>
                            <button class="cart"><i class="fa-solid fa-bag-shopping"></i></button>
                        </div>`
    
            cardContainer.innerHTML=cards;
    })
})





