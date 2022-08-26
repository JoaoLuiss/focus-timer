import { buttonLightmodeOn, buttonDarkmodeOn } from './elements.js'

export function Scenario() {
  function turnDarkmodeOn() {
    buttonLightmodeOn.classList.add('hide')
    buttonDarkmodeOn.classList.remove('hide')
  }

  function turnLightmodeOn() {
    buttonLightmodeOn.classList.remove('hide')
    buttonDarkmodeOn.classList.add('hide')
  }

  return { turnDarkmodeOn, turnLightmodeOn }
}
