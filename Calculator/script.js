let btn = document.querySelector('.buttons')
let input = document.querySelector('input')
let resultoutput = document.querySelector('.result')
let clear = document.querySelector('.clear')

function yes(evt){
   let value = evt.target.innerText
   let lastchar = input.value.slice(-1)
   let operators = ['+', '/' ,'*' , '-']

   if(!isNaN(value) || value ==='.'){
      input.value +=  value
   }

   if(!operators.includes(lastchar)){
   if(operators.includes(value) && input.value!==''){
       input.value +=  value
    }
  }
}

function finalvalue() {
  try {
    input.value = math.evaluate(input.value);
  } catch {
    input.value = "Error";
  }
}

function clearoutput(){
     input.value = ''
}

clear.addEventListener('click',clearoutput)

resultoutput.addEventListener('click',finalvalue)

btn.addEventListener('click',yes)