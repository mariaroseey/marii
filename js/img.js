const image = (img) => {

    let div = document.createElement("div")
    div.innerHTML = `<div class="pic">
                    <img src="./image/${img}">
                     </div>
    `

    return div
}

export{image}