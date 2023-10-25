export function messageGUI(message) {
    let mainDiv = document.querySelector('.main')
    let newGui = document.createElement('div')
    newGui.classList.add('gui')
    mainDiv.appendChild(newGui)
    newGui.innerHTML = `
    <div class="header">
    <p>are you an orbit?</p>
    <div>X</div> 
    </div>
    <div class="message">${message}</div>
    <div class="btns">
    <button>Stan</button>
    <button>Loona</button>
    </div>
    `
}

export function gifGUI(imgsrc){
    let mainDiv = document.querySelector('.main')
    let newGui = document.createElement('div')
    newGui.classList.add('gui')
    mainDiv.appendChild(newGui)
    newGui.innerHTML = `<img src="${imgsrc}">`
}