const board = document.querySelector(".innercontainer");

console.log(board);


const snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];


function createboard(){
  for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
        let cell = document.createElement('div')
        cell.setAttribute('data-x',[j])
        cell.setAttribute('data-y',[i])
        
     cell.classList.add('cell')
     board.appendChild(cell)
    }
  }
}
createboard()

