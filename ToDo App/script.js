let input = document.querySelector('input')
let addbtn = document.querySelector('.addbtn')
let taskdiv = document.querySelector('.taskdiv')

addbtn.addEventListener('click',()=>{

    if(input.value==''){
   addbtn.setAttribute("disabled");
    }
    else {
        addbtn.removeAttribute("disabled");

     let innertaskdiv = document.createElement('div')
    innertaskdiv.classList.add('innertaskdiv')

    let innertaskdiv2 = document.createElement('div')
    innertaskdiv2.classList.add('innertaskdiv2')

   let para = document.createElement('p')
   para.classList.add('para')

   let deletebtn = document.createElement('button')
    deletebtn.innerText = 'Remove'
    deletebtn.classList.add('remove')

    let markbtn = document.createElement('button')
    markbtn.innerText = 'Mark'
    markbtn.classList.add('mark')

    para.innerText = input.value
    innertaskdiv.appendChild(para)
    innertaskdiv2.appendChild(deletebtn)
    innertaskdiv2.appendChild(markbtn)
    innertaskdiv.appendChild(innertaskdiv2)
    taskdiv.appendChild(innertaskdiv)

    deletebtn.addEventListener('click',()=>{
        removetask(innertaskdiv,taskdiv)
    })

    markbtn.addEventListener('click',()=>{
        marktask(para,markbtn)
    })

    empty();
    }
})


function empty(){
    input.value = ''
}

function removetask(innertaskdiv,taskdiv){
    taskdiv.removeChild(innertaskdiv)
    innertaskdiv.classList.remove('innertaskdiv')
}

function marktask(para,markbtn){
   if(markbtn.innerText=='Mark'){
    markbtn.innerText = 'Unmark'
    para.classList.add('paramark')
   }
    else{
         markbtn.innerText = 'Mark'
    para.classList.remove('paramark')
    }
}


