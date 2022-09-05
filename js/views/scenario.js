import { buttonLightmodeOn, buttonDarkmodeOn } from './elements.js'

export function Scenario() {
  function turnDarkmodeOn() {
    buttonLightmodeOn.classList.add('hide')
    buttonDarkmodeOn.classList.remove('hide')
    document.documentElement.style.setProperty("--bg-body", "black");
    document.documentElement.style.setProperty("--bg-primary-color", "hsl(240, 9%, 21%)");
    document.documentElement.style.setProperty("--bg-emphasis", "hsl(194, 97%, 31%)");
    document.documentElement.style.setProperty("--fc-primary-color", "hsl(240, 6%, 89%)");
    document.documentElement.style.setProperty("--fc-icon-emphasis", "white");
  }

  function turnLightmodeOn() {
    buttonLightmodeOn.classList.remove('hide')
    buttonDarkmodeOn.classList.add('hide')
    document.documentElement.style.setProperty("--bg-body", "white");
    document.documentElement.style.setProperty("--bg-primary-color", "hsl(240, 9%, 89%)");
    document.documentElement.style.setProperty("--bg-emphasis", "hsl(194, 97%, 31%)");
    document.documentElement.style.setProperty("--fc-primary-color", "hsl(240, 6%, 21%)");
    document.documentElement.style.setProperty("--fc-icon-emphasis", "white");
  }

  return { turnDarkmodeOn, turnLightmodeOn }
}
