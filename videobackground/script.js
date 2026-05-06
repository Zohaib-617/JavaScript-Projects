let pausebtn = document.querySelector('.pause')
let video = document.querySelector('.back-video')


function pausevideo(){
    if(video.hasAttribute('autoplay')){
        video.removeAttribute('autoplay','')
        video.pause();
        pausebtn.textContent = 'Start'
    }
    else{
        video.play();
        video.setAttribute('autoplay','')
        pausebtn.textContent = 'Pause'
    }
}

pausebtn.addEventListener('click',pausevideo)