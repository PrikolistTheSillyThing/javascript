const shuttle = document.getElementsByClassName('shuttle')[0]
const bullet = document.querySelector('.shuttle .bullet')
const invader = document.querySelector('.invaders .green')
const scoreDiv= document.querySelector('.score')
let shuttleX = 50
let invaderX = 50
let invaderY = 0
let bulletY = -5
let bulletTimer 
let score = 0
let invaderSpeedX = 1 
let invaderAnimIndex = 0
const invaderCoords = [
    '-13px -520px',
    '-13px -549px'
]
function control (e) {
    switch (e.code) {
        case 'ArrowLeft':
            moveLeft ()
            break;
        case 'ArrowRight':
            moveRight ()
            break;
        case 'Space':
            shoot () 
            break;
    }
}

function moveRight () {
    shuttleX += 1 
    shuttle.style.left = `${shuttleX}%`
    if (shuttleX >= 90) {
        shuttleX = 90
    }
}
function moveLeft () {
    shuttleX -= 1 
    shuttle.style.left = `${shuttleX}%`
    if (shuttleX <= 10) {
        shuttleX = 10
    }
}
function shoot() {
    bullet.style.display = 'block'
    // bullet.style.animation = 'bullet-fly 1s linear'
    bulletTimer = setInterval(moveBullet, 10)
}
function bulletMiss (e) {
    bullet.style.display = 'none'
}
function moveInvader () {
    if (invaderX > 90 || invaderX < 10 ) {
        invaderSpeedX *= -1.2 
        invaderY += 5
    }
    invaderX += invaderSpeedX 
    invader.style.left = `${invaderX}%`
    invader.style.top = `${invaderY}%`
    invaderAnimIndex = invaderAnimIndex == 0 ? 1: 0 
    invader.style.backgroundPosition = `${invaderCoords[invaderAnimIndex]}`
}

function moveBullet () {
    if (bulletY > -99) {
        bulletY -= 1
        bullet.style.top = `${bulletY}vh`

        if (parseInt(invader.offsetTop / 10) == parseInt ( (innerHeight + bullet.offsetTop) / 10 ) ) {
            if ( parseInt(shuttleX/10) == parseInt(invaderX/10) ) {
                score++
                scoreDiv.innerHTML = score
            }
        }

    } else {
        bulletY = -5
        clearInterval(bulletTimer)
        bullet.style.display = 'none'
        bullet.style.top = `${bulletY}vh`
    }
}

setInterval(moveInvader, 100)

