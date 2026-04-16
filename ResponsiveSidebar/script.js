let innercontainer = document.querySelector('.container2')
let menusymbol = document.querySelector('.ri-menu-line')
let closesymbol = document.querySelector('.ri-close-fill')

function display(){
  innercontainer.classList.remove('display')
}

function remove(){
     innercontainer.classList.add('display')
}

menusymbol.addEventListener('click',display)
closesymbol.addEventListener('click',remove)