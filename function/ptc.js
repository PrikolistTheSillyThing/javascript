function produce () {
    return Math.round(Math.random()*10)
}

function transform (value) {
    let res = Math.round(value / 2)
    return res
}

function consume (n) {
    result.innerHTML = `<div>${console.log("n=" + n)}</div>`
}
