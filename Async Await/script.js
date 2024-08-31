const cardsContainer=document.querySelector('.card-container')
let cards="";
async function fun(){
    const response=await fetch("https://api.github.com/users")
    const data=await response.json()
    
    return data;
}
fun().then(function(result){
    result.map((v,i)=>{
        if(i<6){
            
            cards=cards+`<div class="card">
                    <div class="profile">
                        <img src="${v.avatar_url}" alt="">
                    </div>
                    <h2 id="userId">User ID: ${v.id}</h2>        
                    <h2 id="name">User Name: ${v.login}</h2>
                </div>`
            }
        })
        cardsContainer.innerHTML=cards          
    })
