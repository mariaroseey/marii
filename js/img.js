const image = (img) => {

    let div = document.createElement("div")
    div.innerHTML = `<img src="./image/${img}">`

    return div
}

export{image}