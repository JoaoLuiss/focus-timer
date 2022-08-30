import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonLightmodeOn,
  buttonDarkmodeOn
} from '../views/elements.js'

export function Events({ timer, sounds, scenario }) {
  buttonPlay.addEventListener('click', () => {
    sounds.btnClicking()
    if (timer.isItRolling() === true) {
      // do nothing, cause timer is already rolling
    } else {
      timer.play()
    }
  })

  buttonStop.addEventListener('click', () => {
    sounds.btnClicking()
    timer.stop()
  })

  buttonPlus.addEventListener('click', () => {
    sounds.btnClicking()
    timer.plusFive()
  })

  buttonMinus.addEventListener('click', () => {
    sounds.btnClicking()
    timer.minusFive()
  })

  buttonForest.addEventListener('click', () => {
    sounds.btnClicking()
    sounds.forest()
  })

  buttonRain.addEventListener('click', () => {
    sounds.btnClicking()
    sounds.rain()
  })

  buttonMarket.addEventListener('click', () => {
    sounds.btnClicking()
    sounds.market()
  })

  buttonFire.addEventListener('click', () => {
    sounds.btnClicking()
    sounds.fire()
  })

  buttonLightmodeOn.addEventListener('click', () => {
    sounds.btnClicking()
    scenario.turnDarkmodeOn()
  })

  buttonDarkmodeOn.addEventListener('click', () => {
    sounds.btnClicking()
    scenario.turnLightmodeOn()
  })
}
