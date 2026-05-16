let cards = document.querySelectorAll('.cards')
let cardinners = document.querySelectorAll('.card-inner')

let content = '';
let arr = [];


for(let cardinner of cardinners){
    cardinner.addEventListener('click',()=>{
        cardinner.classList.add('card-inner-flip')
        
        arr.push(cardinner)
    
        if(content ==''){
            content = cardinner.textContent
        }
        else if(content ==cardinner.textContent){
            console.log('matched');
            content = '';
             arr.forEach((card)=>{
             card.style.cursor = "not-allowed";
            
            })
        }
        else{
            console.log('wrong');
            content = '';
           setTimeout(()=>{
            arr.forEach((card)=>{
            card.classList.remove('card-inner-flip')
             card.style.cursor = "pointer";
            })
            arr = [];
           },1500)
        }
    })
}


