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
} from '/js/views/elements.js'
import { Events } from '/js/controllers/events.js'
import { Timer } from '/js/models/timer.js'
import { Sounds } from '/js/models/sounds.js'

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
