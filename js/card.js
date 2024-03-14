const cards = (a,b,c,d,e,f,g,h,i,j) => {
    let div = document.createElement("div")
    div.innerHTML = `<div class="container">
                    <div class="pic1">
                    <img src="./image/${b}">
                    <p>${c}</p>
                    <button>${d}</button>
                    </div> 
                    <div class="pic1"> 
                    <img src="./image/${e}">
                    <p>${f}</p>
                    <button>${g}</button>
                    </div> 
                    <div class="pic1">
                    <img src="./image/${h}">
                    <p>${i}</p>
                    <button>${j}</button>
                    </div> 
                </div>        
                   
    
    `
    return div
}
export{cards}