let div = document.querySelector('div')
let btn = document.querySelector('button')


function randomcolor(){
    return Math.floor(Math.random()*256)
}

function getcolor(){
    return `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`
}

btn.addEventListener('click',()=>{
    let color = getcolor();
    div.style.backgroundColor = color
})
