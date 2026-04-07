let btn = document.querySelector('.buttons')
let input = document.querySelector('input')
let resultoutput = document.querySelector('.result')
let clear = document.querySelector('.clear')


let count =0
function yes(evt){
    let str = ''
    if(evt.target.nodeName==='BUTTON' && evt.target.innerText!=='+' &&
        evt.target.innerText!='-' &&
        evt.target.innerText!='/' &&
        evt.target.innerText!='*'){
       str =  input.value.concat(evt.target.innerText) 
        input.value = str
             count++;
    }

    if(count>0){
         if(evt.target.nodeName==='BUTTON' && evt.target.innerText=='+' ||
        evt.target.innerText=='-' ||
        evt.target.innerText=='/' ||
        evt.target.innerText=='*' ){
       str =  input.value.concat(evt.target.innerText) 
       input.value = str
             count++;
             }
            }
        }


function finalvalue(){
    let resultvalue = eval(input.value)
     input.value = resultvalue
}




resultoutput.addEventListener('click',finalvalue)

btn.addEventListener('click',(evt)=>{
     yes(evt)
})


