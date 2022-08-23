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
import { Events } from './events.js'
import { Timer } from '../models/timer.js'
import { Sounds } from '../models/sounds.js'

const sounds = Sounds()

const timer = Timer({ minutesElement, secondsElement, sounds })

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
