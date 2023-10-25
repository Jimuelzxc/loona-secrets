import { messageGUI, gifGUI } from './js/createGUI.js';
import { data } from './js/data.js'

const { messages, gifs } = data


function virus() {
    var timer = setInterval(() => {
        let randomGifs = Math.floor(Math.random() * gifs.length)
        let randomMessages = Math.floor(Math.random() * messages.length)

        messageGUI(messages[randomMessages])
        gifGUI(gifs[randomGifs])

        let allGUI = document.querySelectorAll('.gui')
        allGUI.forEach((value) => {
            let randX = Math.floor(Math.random() * window.innerWidth)
            let randY = Math.floor(Math.random() * window.innerHeight)
            value.style.transform = `translate(${randX}px, ${randY}px)`
        })

        allGUI.length > 200 ? clearInterval(timer) : null
    }, 500)
}

let virusBtn = document.querySelector('.click-me')
virusBtn.addEventListener('click',virusStart)

function virusStart(){
    virusBtn.setAttribute("disabled", true)
    document.querySelector(".audio").play()
    virus()
}
