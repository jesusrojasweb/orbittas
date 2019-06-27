const $sliderList = document.querySelectorAll('.slider')
const padre = $sliderList[0].children;
let lastScrollTop = 0;
let touchstartY = 0;
let touchstartX = 0;
let touchendX = 0;
let touchendY = 0;
let alto = window.screen.availHeight;
console.log(alto)

let gesuredZone = document.querySelector('body');

window.addEventListener( 'mousewheel',function(e){
  for(let i = 0; i < padre.length; i++){
    let hijo = padre[i].classList.remove('prev')
  }
  if(e.deltaY > 0){
    slide(true,false)
  }
  if(e.deltaY < 0){
    slide(false,false)
  }
})
function slide(direccion, movil) {
  for(let i = 0; i < $sliderList[0].children.length; i++){
    let hijo = padre[i];
    let coords = hijo.getBoundingClientRect();
    hijo.styles
    let next
    console.log()
    //coords.bottom >= alto.bottom
    // console.log(hijo)
    // console.log(`Estas son las coordenadas`)
    // console.log(coords)
    // console.log(coords.top )
    // console.log(`Este es el alto${alto}`)
    console.log(coords.bottom >= alto.bottom)
    //detectamos direccion del scroll
    if(direccion){
      //detectamos si es un dispositivo movil
      if(movil){
        if(false){
          next = i + 1
          if(next >= padre.length ){
            next = i;
            window.scrollBy(0, -window.innerHeight);
            console.log("estamos en next")
          }
        } 
        if(true){
          console.log("salimos")
          break;
        }
      }
      next = i + 1
      if(next >= padre.length ){
        next = i;
      }
    }
    if(!direccion){
      next = i - 1 
      if(next < 0 ){
        next = i;
      }
    }
    console.log(next)
    let siguiente = padre[next];
    if(hijo.classList[2] == "active" || hijo.classList[3] == "active"){

      scroll(hijo,siguiente)
      break;
    }
  }
}

function scroll(hijo, siguiente){
  hijo.classList.remove('active')
  hijo.classList.add('prev')
  siguiente.classList.add('active')
}

gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = touchendX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
}, false); 

function handleGesure() {
    for(let i = 0; i < padre.length; i++){
      let hijo = padre[i].classList.remove('prev')
    }

    if (touchendY < touchstartY) {
        slide(true, true)
    }if (touchendY > touchstartY) {
        slide(false)
        console.log("Subiste")
    }
    if (touchendY == touchstartY) {
      arriba()
    }
}