let h4s = document.querySelectorAll('h4')
let paras = document.querySelectorAll('p')
let divs = document.querySelectorAll('div')


let toggle = 'appear'

for(let h4 of h4s){
    h4.addEventListener('click',(evt)=>{
        const next = h4.nextElementSibling;
        const child = next.firstElementChild;
       
        if( toggle=='appear'){
             console.log('hey');
            //  child.style.display = 'block'
             next.classList.add('open')
             next.classList.remove('answer')
             toggle = 'disappear'
        }
        else  {
            // child.style.display = 'none'
             next.classList.remove('open')
             next.classList.add('answer')
            toggle = 'appear'
            console.log('hey2');  
        }
        
        
    })
}



