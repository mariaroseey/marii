const info = (title,para,btn) => {
    let div = document.createElement("div")
    div.className ="info"
    div.innerHTML = `<h1>${title}</h1> <br> <br>
                    <p>${para}</p> <br>    
                    <button>${btn}</button>
    
    `
    return div
}

export{info}