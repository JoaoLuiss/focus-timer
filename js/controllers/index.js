import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  minutesElement,
  secondsElement
} from '../views/elements.js'
import { Events } from '/focus-timer/js/controlles/events.js'
import { Timer } from '/focus-timer/js/models/timer.js'
import { Sounds } from '/focus-timer/js/models/sounds.js'

const sounds = Sounds()

const timer = Timer({ minutesElement, secondsElement })

Events({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  timer,
  sounds
})
