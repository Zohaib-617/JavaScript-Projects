let Openbtn = document.querySelector('.btnOpen')
let modal = document.querySelector('.modal')
let closebtn = document.querySelector('.span')
let body = document.querySelector('body')

Openbtn.addEventListener('click',()=>{
  modal.style.display = 'flex'
})

closebtn.addEventListener('click',()=>{
  modal.style.display = 'none'
})

body.addEventListener('click',(evt)=>{
  if(evt.target == modal ){
  modal.style.display = 'none'
   
  }
})