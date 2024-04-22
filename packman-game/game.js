let mapData = [
    [2,3,0,0,0,0,0,0,4,0],
    [0,4,0,0,4,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,4,0],
    [0,0,2,3,0,0,4,2,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [3,0,0,0,1,0,0,0,3,2],
    [0,4,0,0,0,0,0,0,0,3],
    [0,0,0,3,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,3,0,0],
    [0,0,0,0,4,0,0,0,0,3],
]


let pr = 5
let pc = 4

let coins = 0
let hp = 100

function render() {

    map.innerHTML = ``

    for (let row = 0; row<10; row++) {
        for (let col=0; col<10; col++) {
            if(mapData[row][col] == 0 ) {
                map.innerHTML += `<div></div>`
            } else if(mapData[row][col] == 2 ) {
                map.innerHTML += `<div class="coin"></div>`
            } else if(mapData[row][col] == 1 ) {
                map.innerHTML += `<div class="pac"></div>`
            } else if(mapData[row][col] == 3 ) {
                map.innerHTML += `<div class="bomb"></div>`
            } else if(mapData[row][col] == 4 ) {
                map.innerHTML += `<div class="heart"></div>`
            }
            
        }
    }



    
    stats.innerHTML = `Coins: ${coins} <br> Health: ${hp}`
    
    if (hp<=0) {
        stats.innerHTML = `GAME OVER SILLY`
    }    
}
function move() {
    mapData[pr][pc] = 0

    switch (event.code) {
        case "ArrowRight": pc < 9 ? pc++: pc=0; break
        case "ArrowLeft":  pc > 0 ? pc--: pc=9; break
        case "ArrowDown":  pr < 9 ? pr++: pr=0; break
        case "ArrowUp":    pr > 0 ? pr--: pr=9; break
    }

    if (mapData[pr][pc] == 2) {
        coins+= 5
    }
    if (mapData[pr][pc] == 3) {
        hp-= 20
    }
    if (mapData[pr][pc] == 4) {
        hp+= 10
    }
    if (hp <= 0) {
        pr = 4
        pc = 5
    } 

    

    mapData[pr][pc] = 1



    render()
}



render()