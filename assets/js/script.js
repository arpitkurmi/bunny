const loading= document.getElementById('loading');
function preloader(){
    loading.style.display= 'none';
}

// loop for automatically change the slide
const slide= document.querySelectorAll('.container');
let i=0;
let l=slide.length
function loop(){
    slide[i].classList.remove('allow');
    i=(i+1)%l;
    console.log(i);
    slide[i].classList.add('allow');
    
}
function startloop(){
    loop();
    setInterval(loop,5000);
}
startloop();
// media query wala nav bar

const nav= document.querySelector('.navm');
function doit(){
    nav.style.visibility='visible';
};

function doitopp(){
    nav.style.visibility='hidden';
}
