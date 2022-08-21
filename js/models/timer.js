export function Timer({ sounds, minutesElement, secondsElement }) {
  let minutes = Number(minutesElement.textContent)
  let seconds = Number(secondsElement.textContent)
  let resetMinutes = minutes
  let resetSeconds = 0
  let idTimeout
  let isRolling
  fillZeroOnDisplay()

  function play() {
    isRolling = true
    idTimeout = setTimeout(() => {
      --seconds
      if (seconds < 0) {
        seconds = 59
        --minutes
      }
      secondsElement.textContent = seconds
      minutesElement.textContent = minutes
      fillZeroOnDisplay()
      if (minutes == 0 && seconds == 0) {
        finishTimer()
        // sounds.timerFinished()
      } else play()
    }, 1000)
  }

  function stop() {
    clearTimeout(idTimeout)
    isRolling = false
  }

  function finishTimer() {
    stop()
    resetTimer()
  }

  function plusFive() {
    minutes += 5
    resetMinutes += 5
    minutesElement.textContent = minutes
    fillZeroOnDisplay()
  }

  function minusFive() {
    if (minutes - 5 < 0 ) {
      // do nothing, cause there is not 5 minutes to take off
    } else {
      minutes -= 5
      resetMinutes -= 5
      minutesElement.textContent = minutes
      fillZeroOnDisplay()
    }
  }

  function resetTimer() {
    minutes = resetMinutes
    seconds = resetSeconds
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
    fillZeroOnDisplay()
  }

  function isItRolling() {
    return isRolling
  }

  function fillZeroOnDisplay() {
    minutesElement.textContent = minutesElement.textContent.padStart(2, '0')
    secondsElement.textContent = secondsElement.textContent.padStart(2, '0')
  }

  return { play, stop, plusFive, minusFive, isItRolling }
}
