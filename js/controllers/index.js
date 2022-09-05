import { Events } from './events.js'
import { Timer } from '../models/timer.js'
import { Sounds } from '../models/sounds.js'
import { Scenario } from '../views/scenario.js'

const sounds = Sounds()

const timer = Timer({ sounds })

const scenario = Scenario()

Events({
  sounds,
  timer,
  scenario
})

scenario.turnDarkmodeOn()