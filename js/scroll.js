/*Back to top*/
const scrollTop = document.getElementById('scrollbutton');
let datashow = false;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50 && !datashow){
        scrollTop.setAttribute('data-show', 'true');
        datashow = true;
    }

    if(window.scrollY <= 50 && datashow){
        scrollTop.setAttribute('data-show', 'false');
        datashow = false;
    }

    scrollTop.addEventListener('click', () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'    
        });
    });
});

$("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport:true,
    arrowScroll: 50,
    touchpadSupport:true,
    fixedBackground:true

});