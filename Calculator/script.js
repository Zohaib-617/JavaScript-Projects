let btn = document.querySelector('.buttons')
let input = document.querySelector('input')
let resultoutput = document.querySelector('.result')
let clear = document.querySelector('.clear')

 

function yes(evt){

  if(evt.target.innerText==='1'||
     evt.target.innerText==='2'||
     evt.target.innerText==='3'||
     evt.target.innerText==='4'||
     evt.target.innerText==='5'||
     evt.target.innerText==='6'||
     evt.target.innerText==='7'||
     evt.target.innerText==='8'||
     evt.target.innerText==='9'||
     evt.target.innerText==='0'||
     evt.target.innerText==='.'
  ){
     input.value =  input.value.concat(evt.target.innerText)
  }

  if(evt.target.innerText==='+'||
     evt.target.innerText==='-'||
     evt.target.innerText==='/'||
     evt.target.innerText==='*'){
        if(input.value.endsWith('1') ||
           input.value.endsWith('2') ||
           input.value.endsWith('3') ||
           input.value.endsWith('4') ||
           input.value.endsWith('5') ||
           input.value.endsWith('6') ||
           input.value.endsWith('7') ||
           input.value.endsWith('8') ||
           input.value.endsWith('9') ||
           input.value.endsWith('0') ){
            
           input.value =  input.value.concat(evt.target.innerText)    
      }
    }
  }

function finalvalue(){
    let resultvalue = eval(input.value)
     input.value = resultvalue
}

function clearoutput(){
     input.value = ''
}

clear.addEventListener('click',clearoutput)

resultoutput.addEventListener('click',finalvalue)

btn.addEventListener('click',yes)