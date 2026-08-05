let innerdivs = document.querySelectorAll('.innerdiv')
let input = document.querySelector('input')
let comparebtn = document.querySelector('.compare-btn')
let addbtn = document.querySelector('.add-btn')
let resultheading = document.querySelector('.result-heading')
let startbtn = document.querySelector('.start-btn')
let inputstorage = document.querySelector('.input-storage')

let innerdivid1 = document.querySelector('#box1')
let innerdivid2 = document.querySelector('#box2')
let innerdivid3 = document.querySelector('#box3')
let innerdivid4 = document.querySelector('#box4')

let result = [];
let inputval = []
let count = 5;
let val1 = compare();
function addvaluesbyclick(e){
  inputval.push(e.target.textContent)
 inputstorage.textContent = inputval
 resultheading.textContent = ''
 }

for(let innerdiv of innerdivs){
  innerdiv.addEventListener('click',(e)=>{
   addvaluesbyclick(e)
  })
}

function removevalues(){
inputval.pop()
inputstorage.textContent = inputval
}

function compare(){
      let finalresult = result.join('')
  let finalval = inputval.join('')
  if(finalresult==finalval){
    inputstorage.textContent = ''
   resultheading.textContent = 'Correct Sequence'
    result = [];
    inputval = [];
  }
 else {
  inputstorage.textContent = ''
   resultheading.textContent = 'Wrong Sequence'
   result = [];
    inputval = [];
  }
  startbtn.disabled = false;

  return{
    finalval ,
    finalresult,
    result,
    inputval,
  }
 }
 
function restartGlow(div, glowClass){

    innerdivid1.classList.remove('glow-box1')
    innerdivid2.classList.remove('glow-box2')
    innerdivid3.classList.remove('glow-box3')
    innerdivid4.classList.remove('glow-box4')

    setTimeout(() => {
        div.classList.add(glowClass)
    },500)
}

function start(){
  startbtn.disabled = true

 
 let count2 = 1
 let red = 0
 let green = 1
 let blue = 2
 let yellow = 3
 
 let colorchange = setInterval(()=>{
 let random =  Math.floor(Math.random()*4)
      
      
    if(random == red){

    restartGlow(innerdivid1, 'glow-box1')
    result.push(innerdivid1.textContent)

}
else if(random == green){

    restartGlow(innerdivid2, 'glow-box2')
    result.push(innerdivid2.textContent)

}
else if(random == blue){

    restartGlow(innerdivid3, 'glow-box3')
    result.push(innerdivid3.textContent)

}
else if(random == yellow){

    restartGlow(innerdivid4, 'glow-box4')
    result.push(innerdivid4.textContent)

}
      
    if(count == count2){
      
      clearInterval(colorchange)

      if(val1.inputval.join('') ==='') return;
      if(val1.result.join('') !== val1.inputval.join('') ){
       return;
        
      }
      else if(val1.result.join('') === val1.inputval.join('')){
         count += 2;
      }
    }
    else{
      count2++;
    }
  },1500)
 }

addbtn.addEventListener('click',removevalues)
comparebtn.addEventListener('click',compare)
startbtn.addEventListener('click',start)

