let div = document.querySelector('div')
let btn = document.querySelector('button')


btn.addEventListener('click',()=>{
    let random = Math.random()
let color = `rgb(${Math.floor(random*255)},${Math.floor(random*230)},${Math.floor(random*240)})`

div.style.backgroundColor = color;
console.log(color);
})
