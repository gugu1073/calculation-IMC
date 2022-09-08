
export const modal = {
  
  wrapper:  document.querySelector('.modal-wrepper'),
  Message: document.querySelector('.modal-card .title span'),
  buttonClose: document.querySelector('.modal-card button'),
  
  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  },
}


modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) { 
  if(event.key === 'Escape') {
    modal.close()
  }
}
