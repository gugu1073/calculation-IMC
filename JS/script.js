
import { modal } from './modal.js'
import {alertError} from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => { 
  event.preventDefault() 
  
  const weight = inputWeight.value 
  const height = inputHeight.value 
 
  const weightOrheightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrheightIsNotANumber) {
    alertError.open()
    return; 
  } else {
    alertError.close()
  }
 
  const result = calculateIMC(weight, height);
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const massage = `Seu IMC é de ${result}`
  modal.Message.innerText = massage
  
  // usando a função que está no modal para abrir o modal.wrapper
  modal.open()
}

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()







