let div = document.querySelector('div')
let btn = document.querySelector('button')
let body = document.querySelector('body')
let img = document.querySelector('img')


btn.addEventListener('click',()=>{
    div.classList.add('display')
    div.classList.add('red')
})

window.addEventListener('click',(e)=>{
    console.log('hello');
     div.classList.add('display')
     div.classList.remove('red')
   if(!div.contains(e.target)){
     div.classList.remove('red')
      div.classList.add('display')
   }
})