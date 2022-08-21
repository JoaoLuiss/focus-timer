export function Sounds() {
  const soundsList = {}
  soundsList.forestSound = new Audio('../../assets/Floresta.wav')
  soundsList.rainSound = new Audio('../../assets/assets/Chuva.wav')
  soundsList.marketSound = new Audio('../../assets/assets/Cafeteria.wav')
  soundsList.fireSound = new Audio('../../assets/assets/Lareira.wav')

  for (const object in soundsList) {
    if (Object.hasOwnProperty.call(soundsList, object)) {
      const sound = soundsList[object]
      sound.loop = true
    }
  }
  const btnClickingSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  function btnClicking() {
    btnClickingSound.play()
  }

  function forest() {
    if (soundsList.forestSound.paused) {
      stopAllSounds()
      soundsList.forestSound.play()
    } else soundsList.forestSound.pause()
  }

  function rain() {
    if (soundsList.rainSound.paused) {
      stopAllSounds()
      soundsList.rainSound.play()
    } else soundsList.rainSound.pause()
  }

  function market() {
    if (soundsList.marketSound.paused) {
      stopAllSounds()
      soundsList.marketSound.play()
    } else soundsList.marketSound.pause()
  }

  function fire() {
    if (soundsList.fireSound.paused) {
      stopAllSounds()
      soundsList.fireSound.play()
    } else soundsList.fireSound.pause()
  }

  function stopAllSounds() {
    for (const object in soundsList) {
      if (Object.hasOwnProperty.call(soundsList, object)) {
        const sound = soundsList[object]
        sound.pause()
      }
    }
  }

  return { btnClicking, forest, rain, market, fire, stopAllSounds }
}
