let btn = document.querySelector('.buttons')
let input = document.querySelector('input')



function yes(evt){
    console.log(evt.target);
    
    if(evt.target.nodeName==='BUTTON'){
        input.value = evt.target.innerText
    }
}

btn.addEventListener('click',yes)
