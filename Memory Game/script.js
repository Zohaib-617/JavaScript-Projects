let cards = [...document.querySelectorAll('.cards')]
let cardinners = document.querySelectorAll('.card-inner')
let resetbtn= document.querySelector('.reset-btn')
let startbtn= document.querySelector('.start-btn')
let cardcontainer = document.querySelector('.card-container')
let children = cardcontainer.children
let frag = document.createDocumentFragment();

let content = '';
let arr = [];

//showing cards at the beginning
function showcards(){
    for(let cardinner of cardinners){
   
   setTimeout(()=>{
     cardinner.classList.add('card-inner-flip')
   },200)

   setTimeout(()=>{
     cardinner.classList.remove('card-inner-flip')
   },1500)
}
    while(children.length){
        frag.appendChild(children[Math.floor(Math.random() * children.length)])
    }
    cardcontainer.appendChild(frag)
}

//logic for cards staying flipped if correct and unflip when wrong
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
           },1200)
        }
    })
}

//reseting the game
function resetgame(){
    arr.forEach((card)=>{
  card.classList.remove('card-inner-flip')
     card.style.cursor = "pointer";
    })
    arr = []

    while(children.length){
        frag.appendChild(children[Math.floor(Math.random() * children.length)])
    }
    cardcontainer.appendChild(frag)
    showcards();
}
resetbtn.addEventListener('click',resetgame)
startbtn.addEventListener('click',showcards)