const form=document.querySelector('form')
let serialNumber=1

form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const userName=document.getElementById('name').value;
        const mobile=document.getElementById('mobile').value;
        const userEmail=document.getElementById('email').value;
        const userPassword=document.getElementById('pass').value;

      const table=document.querySelector('div.right>table');

      const newRow=document.createElement('tr')
      newRow.innerHTML=`<td>${serialNumber++}</td>
                        <td>${userName}</td>
                        <td>${mobile}</td>
                        <td>${userEmail}</td>
                        <td>${userPassword}</td>`

      table.appendChild(newRow)
})