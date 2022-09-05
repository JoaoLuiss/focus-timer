export function Sounds() {
  const soundsList = {}
  soundsList.forestSound = new Audio('js/assets/Floresta.wav')
  soundsList.rainSound = new Audio('/js/assets/Chuva.wav')
  soundsList.marketSound = new Audio('/js/assets/Cafeteria.wav')
  soundsList.fireSound = new Audio('/js/assets/Lareira.wav')

  // iteration all sounds to turn looping on
  for (const object in soundsList) {
    if (Object.hasOwnProperty.call(soundsList, object)) {
      const sound = soundsList[object]
      sound.loop = true
    }
  }

  const timeEndedSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const btnClickingSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  function btnClicking() {
    btnClickingSound.play()
  }

  function forest() {
    togglePlaySound(soundsList.forestSound)
  }

  function rain() {
    togglePlaySound(soundsList.rainSound)
  }

  function market() {
    togglePlaySound(soundsList.marketSound)
  }

  function fire() {
    togglePlaySound(soundsList.fireSound)
  }

  function timeEnded() {
    timeEndedSound.play()
  }

  function togglePlaySound(audio) {
    if (audio.paused) {
      stopAllSounds()
      audio.play()
    } else audio.pause()
  }

  function stopAllSounds() {
    // Iterating all sounds to stopping them
    for (const iterator in soundsList) {
      if (Object.hasOwnProperty.call(soundsList, iterator)) {
        const sound = soundsList[iterator]
        sound.pause()
      }
    }
  }

  function updateVolume(newVolume) {
    newVolume = Number(newVolume) / 100
    // Iterating all sounds to change their volume
    for (const iterator in soundsList) {
      if (Object.hasOwnProperty.call(soundsList, iterator)) {
        const sound = soundsList[iterator]
        sound.volume = newVolume
      }
    }
  }

  return {
    btnClicking,
    forest,
    rain,
    market,
    fire,
    timeEnded,
    stopAllSounds,
    updateVolume
  }
}
