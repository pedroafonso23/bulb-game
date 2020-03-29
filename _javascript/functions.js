var timeUp = ""
var timeLeft = 10
var countDown
var tOffTimer
var gameTimer

function startGame() {
    document.getElementById("timer").innerText = "TIMER"
    document.getElementById(`score`).innerText = 0
    document.getElementById(`b1`).src = '../_images/lampada-apagada.jpg'
    document.getElementById(`b2`).src = '../_images/lampada-apagada.jpg'
    document.getElementById(`b3`).src = '../_images/lampada-apagada.jpg'
    document.getElementById(`b4`).src = '../_images/lampada-apagada.jpg'
    document.getElementById(`b5`).src = '../_images/lampada-apagada.jpg'
    clearTimeout(countDown)
    clearTimeout(tOffTimer)
    clearTimeout(gameTimer)
    timeLeft = 10
    pTimer()
    gameUp()
}

function pTimer() {
    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "Finished"
    } else {
        document.getElementById("timer").innerHTML = "TIMER: " + timeLeft + " seconds remaining"
        timeLeft--
        countDown = setTimeout(pTimer, 1000)
    }
}

function gameUp() {
    timeUp = document.getElementById("timer").innerText
    if (timeUp == "Finished") {
        document.getElementById(`b1`).src = '../_images/lampada-apagada.jpg'
        document.getElementById(`b2`).src = '../_images/lampada-apagada.jpg'
        document.getElementById(`b3`).src = '../_images/lampada-apagada.jpg'
        document.getElementById(`b4`).src = '../_images/lampada-apagada.jpg'
        document.getElementById(`b5`).src = '../_images/lampada-apagada.jpg'
    } else {
        let rndNum = Math.round((Math.random() + 0.2) * 4)
        let rndImg = document.getElementById(`b${rndNum}`)
        if (!rndImg.src.includes("quebrada") ) {
            rndImg.src = '../_images/lampada-acesa.jpg'
            tOffTimer =  setTimeout(() => {turnOff(rndImg)}, (Math.random() + 0.3 ) * 1500)
        }
        gameTimer =  setTimeout(gameUp, 300)
    }
}

function turnOff(rndImg) {
    if (!rndImg.src.includes("quebrada")) { 
        rndImg.src = '../_images/lampada-apagada.jpg'
    }
}

function litUp(imgIndex) {
    var points = Number(document.getElementById(`score`).innerText)
    let imgUrl = document.getElementById(`b${imgIndex}`)
    if (imgUrl.src.includes("apagada")) {
        imgUrl.src = '../_images/lampada-quebrada.jpg'
    } else if (imgUrl.src.includes("acesa")) {
        imgUrl.src = '../_images/lampada-apagada.jpg'
        points++
        document.getElementById('score').innerHTML = points
    }
}
