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
  secondsElement,
  buttonLightmodeOn,
  buttonDarkmodeOn
} from '../views/elements.js'
import { Events } from './events.js'
import { Timer } from '../models/timer.js'
import { Sounds } from '../models/sounds.js'
import { Scenario } from '../views/scenario.js'

const sounds = Sounds()

const timer = Timer({ minutesElement, secondsElement, sounds })

const scenario = Scenario()

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
  sounds,
  buttonLightmodeOn,
  buttonDarkmodeOn,
  scenario
})
