import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, calculateImc } from './utils.js'

// VARIABLES
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// FUNCTIONS
form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateImc(weight, height)

  displayResultMessage(result)
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerHTML = message
  Modal.open()
}
