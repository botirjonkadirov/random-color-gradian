let body = document.querySelector(`body`)
let container = document.querySelector(`.container`)
let colorText = document.querySelector(`.color_type`)

let values = [
    `0`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
]

function getGradient() {
    let color =`#`
    for (let i = 0; i<6; i++){
        let randomRaqam = Math.trunc(Math.random()*values.length)
        color += values[randomRaqam]
    }
    return color
}



function setGradient(){
    let colorOne = getGradient()
    let colorTwo = getGradient()
    let randomDegree = Math.trunc(Math.random()*360)
    let bgColor = `linear-gradient(
        ${randomDegree}deg,
        ${colorOne},
        ${colorTwo}
        )`
    body.style.background = bgColor
    colorText.textContent = bgColor
}
setGradient()

container.addEventListener(`click`, setGradient)