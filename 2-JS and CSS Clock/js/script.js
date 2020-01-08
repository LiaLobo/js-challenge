const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hand = document.querySelector('.hand')

function setDate() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    if(seconds === 0) {
        secondHand.style.transition = 'none'
    } else {
        secondHand.style.transition = 'all 0.05s'
        secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)'
    }
}

setInterval(setDate, 1000)

