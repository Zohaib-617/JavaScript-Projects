let cards = [...document.querySelectorAll('.cards')]
let cardinners = document.querySelectorAll('.card-inner')
let resetbtn= document.querySelector('.reset-btn')
let startbtn= document.querySelector('.start-btn')
let cardcontainer = document.querySelector('.card-container')
let children = cardcontainer.children
let frag = document.createDocumentFragment();

let playerheading = document.querySelector('.player-heading')
let pairheading = document.querySelector('.pair-heading')

let content = '';
let arr = [];
let arr2 =[];
let player1_pair = []
let player2_pair = []
let turn = 'player1'

//showing cards at the beginning
function showcards(){
    startbtn.disabled = true
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

function results(){
    if(player1_pair.length+player2_pair.length ==6){
        if(player1_pair.length>player2_pair.length){
            playerheading.textContent = 'Player1 has won'
        }
       else if(player1_pair.length<player2_pair.length){
            playerheading.textContent = 'Player2 has won'
        }
        else{
            playerheading.textContent = 'Game Draw'
        }
    }
}

//logic for cards staying flipped if correct and unflip when wrong
for(let cardinner of cardinners){
    cardinner.addEventListener('click',()=>{
        cardinner.classList.add('card-inner-flip')
        
       if(turn =='player1'){
         arr.push(cardinner)
    
        if(content ==''){
            content = cardinner.textContent
        }
        else if(content ==cardinner.textContent){
            console.log('matched');
            player1_pair.push('matched')
            content = '';
             arr.forEach((card)=>{
             card.style.cursor = "not-allowed";
            })
           arr = []
           pairheading.textContent =`Matched Pairs: ${player1_pair.length}` 
        }
        else{
            console.log('wrong');
            turn = 'player2'
            playerheading.textContent = 'wrong' ;
             setTimeout(()=>{
             playerheading.textContent = turn ;
             pairheading.textContent = `Matched Pairs: ${player2_pair.length}`
             },1500)
            content = '';
           setTimeout(()=>{
            arr.forEach((card)=>{
            card.classList.remove('card-inner-flip')
             card.style.cursor = "pointer";
            })
            arr = [];
           },1200)
        }
       }
       
       else{
         arr2.push(cardinner)
    
        if(content ==''){
            content = cardinner.textContent
        }
        else if(content ==cardinner.textContent){
            console.log('matched');
            player2_pair.push('matched')
            content = '';
             arr2.forEach((card)=>{
             card.style.cursor = "not-allowed";
            })
           arr2 = []
           pairheading.textContent = `Matched Pairs: ${player2_pair.length}`
        }
        else{
            console.log('wrong');
            turn = 'player1'
             playerheading.textContent = 'wrong' ;
             setTimeout(()=>{
             playerheading.textContent = turn ;
             pairheading.textContent = `Matched Pairs: ${player1_pair.length}`
             },1500)
            content = '';
           setTimeout(()=>{
            arr2.forEach((card)=>{
            card.classList.remove('card-inner-flip')
             card.style.cursor = "pointer";
            })
            arr2 = [];
           },1200)
        }
       }
       
       results();
 })
}

//reseting the game
function resetgame(){ 
    startbtn.disabled = false
    cardinners.forEach((card)=>{
  card.classList.remove('card-inner-flip')
     card.style.cursor = "pointer";
    })
    arr = []

    while(children.length){
        frag.appendChild(children[Math.floor(Math.random() * children.length)])
    }
    cardcontainer.appendChild(frag)
  
}
resetbtn.addEventListener('click',resetgame)
startbtn.addEventListener('click',showcards)