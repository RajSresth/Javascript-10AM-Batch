const myHyperlink=document.getElementById('myLink');
myHyperlink.addEventListener("click",function(e){
    e.preventDefault();
    const url=this.href;

    // Dimensions of a new tab
    const width=Math.floor(screen.width/2);
    const height=Math.floor(screen.height/2);

    // Position of a tab
    const top=Math.floor((screen.height-height)/2)
    const left=Math.floor((screen.width-width)/2)

    window.open(url,'_blank',`width=${width},height=${height},top=${top}, left=${left}`)
})