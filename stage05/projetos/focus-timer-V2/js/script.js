/**
 * VARIABLES
 */
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonUpTimer = document.querySelector('.up-timer')
const buttonDownTimer = document.querySelector('.down-timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
// let seconds

/**
 * FUNCTIONS 
 */
function updateTimerDisplay(minutes, seconds) { 
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimerDisplay() {
  updateTimerDisplay(minutes, 0)
}

// IMPLEMENTAR FUNÇÕES
function upTimer() {}

function downTimer() {}

function countDown() {

  /**
   * Built-in anonymous function to run application every 1 second
   */
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    /**
     * Checks and ends the application only if the minutes and
     * seconds are zeroed
     */
    if (minutes == 0 && seconds == 0) {
      resetTimerDisplay()
      return
    }

    /** 
     * Add a value to the seconds variable if seconds is
     * less than or equal to "0". Also decrement the minutes
     * if the same condition is met
     */
    if (seconds <= 0) {
      seconds = 6
      --minutes

      // console.log(`Minutos ${minutes}`); // testes
      // console.log(`Segundos ${seconds}`); // testes
    }

    updateTimerDisplay(minutes, String(seconds - 1)) 
    
    countDown()
  }, 1000)
}

/**
 * BUTTONS FUNCTIONALITIES
 */ 
buttonPlay.addEventListener('click', function() {
  countDown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
})

buttonUpTimer.addEventListener('click', () => {upTimer()})

buttonDownTimer.addEventListener('click', () => {downTimer()})

