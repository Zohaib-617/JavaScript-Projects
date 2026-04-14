let div = document.querySelector('div')
let btn = document.querySelector('button')


btn.addEventListener('click',()=>{
    let random = Math.random()
    let random2 = Math.random()
    let random3 = Math.random()

let color = `rgb(${Math.floor(random*255)},${Math.floor(random2*255)},${Math.floor(random3*255)})`

div.style.backgroundColor = color;
console.log(color);
})
