//  var count = 10

//  let time = setInterval(()=>{
//     if(count>0){
//       console.log(count);
//       count--
      
      
//     }
//     else {
//       clearInterval(time)
//       console.log('hey');
//     }
//  },500)

// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,8]
// let str1 = arr1.join('')
// let str2 = arr2.join('')


// if(str1==str2){
//   console.log('matched');
  
// }
// else console.log('wrong');



let innerdivs = document.querySelectorAll('.innerdiv')
let input = document.querySelector('input')
let comparebtn = document.querySelector('.compare-btn')
let addbtn = document.querySelector('.add-btn')
let resultheading = document.querySelector('.result-heading')
let startbtn = document.querySelector('.start-btn')

let innerdivid1 = document.querySelector('#box1')
let innerdivid2 = document.querySelector('#box2')
let innerdivid3 = document.querySelector('#box3')
let innerdivid4 = document.querySelector('#box4')

let result = [];
let inputval = []
for(let innerdiv of innerdivs){
  
  innerdiv.addEventListener('click',(e)=>{
    let text = e.target.textContent
     result.push(text)
      console.log(result);
  })
}

function addvalues(){
 if(input.value =='' || result==[]) return
 else{
  inputval.push(input.value)
 console.log(inputval);
 input.value = ''
 }
 
}

function compare(){
    if(input.value == '' && inputval===[]) return

    else{
      let finalresult = result.join('')
  let finalval = inputval.join('')
  if(finalresult==finalval){
   resultheading.textContent = 'Correct Sequence'
    result = [];
    inputval = [];
  }
 else {
   resultheading.textContent = 'Wrong Sequence'
   result = [];
    inputval = [];
  }
 }
}

let count = 7;
function start(){
 let count2 = 1
 let red = 0
 let green = 1
 let blue = 2
 let yellow = 3
 
     
    let colorchange = setInterval(()=>{
 let random =  Math.floor(Math.random()*4)
      console.log(random);
      
        if(random == red){
        innerdivid1.classList.add('glow-box1')
        innerdivid2.classList.remove('glow-box2')
         innerdivid3.classList.remove('glow-box3')
          innerdivid4.classList.remove('glow-box4')
        console.log('hellored');
      }
     else if(random == green){
        innerdivid2.classList.add('glow-box2')
        innerdivid1.classList.remove('glow-box1')
         innerdivid3.classList.remove('glow-box3')
          innerdivid4.classList.remove('glow-box4')
        console.log('hellogreen');
     }
      else if(random ==blue){
       innerdivid2.classList.remove('glow-box2')
        innerdivid1.classList.remove('glow-box1')
         innerdivid3.classList.add('glow-box3')
          innerdivid4.classList.remove('glow-box4')
        console.log('hellogreen');
       }
     
      else if(random == yellow) {
        innerdivid2.classList.remove('glow-box2')
        innerdivid1.classList.remove('glow-box1')
         innerdivid3.classList.remove('glow-box3')
          innerdivid4.classList.add('glow-box4')
        console.log('hellogreen');
     }
      
    if(count == count2){
      count += 3;
      clearInterval(colorchange)
    }
    else{
      count2++;
    }
  },1500)
 }


addbtn.addEventListener('click',addvalues)
comparebtn.addEventListener('click',compare)
startbtn.addEventListener('click',start)



  