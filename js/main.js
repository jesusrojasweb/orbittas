const $sliderList = document.querySelectorAll('.slider')
const $botones = document.querySelector('.botones')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
const $menu = document.getElementById('menu')
const $header = document.getElementById('header')
const $luz = document.querySelector('.cls-25')
const $copy = document.getElementById('copy')
const $pro = document.getElementById('pro')
const $elec = document.getElementById('elec')
const $web = document.getElementById('web')
const $movil = document.getElementById('movil')
const $hoverPro = document.getElementById('hoverPro')
const $hoverElec = document.getElementById('hoverElec')
const $hoverWeb = document.getElementById('hoverWeb')
const $hoverMovil = document.getElementById('hoverMovil')
let botonesList
let $boton
const padre = $sliderList[0].children;
let lastScrollTop = 0;
let touchstartY = 0;
let touchstartX = 0;
let touchendX = 0;
let touchendY = 0;
let alto = window.screen.availHeight;

let gesuredZone = document.querySelector('body');

$luz.addEventListener("mouseover",function () {
  $copy.style.backgroundColor = '#fcd31e80'
})
$luz.addEventListener("mouseout",function () {
  $copy.style.backgroundColor = '#ffffff00'
})

$burger.addEventListener('click',function () {
  $menu.classList.add('activo')
})
$close.addEventListener('click',function () {
  $menu.classList.remove('activo')
})

$pro.addEventListener('mouseover',function () {
  console.log('hoverpro')
  $hoverPro.classList.add('activo')
})
$pro.addEventListener('mouseout',function () {
  $hoverPro.classList.remove('activo')
})
$web.addEventListener('mouseover',function () {
  console.log('web')
  $hoverWeb.classList.add('activo')
})
$web.addEventListener('mouseout',function () {
  $hoverWeb.classList.remove('activo')
})
$elec.addEventListener('mouseover',function () {
  console.log('elec')
  $hoverElec.classList.add('activo')
})
$elec.addEventListener('mouseout',function () {
  $hoverElec.classList.remove('activo')
})
$movil.addEventListener('mouseover',function () {
  console.log('hovermovil')
  $hoverMovil.classList.add('activo')
})
$movil.addEventListener('mouseout',function () {
  $hoverMovil.classList.remove('activo')
})

//botones
for(let i = 0; i < padre.length; i++){
  const $boton = document.createElement('a');
  if(i == 0){
    setAttributes($boton, {
      href: '#',
      class: 'boton activo',
      id: i
    })
    
  } else{
    setAttributes($boton, {
      href: '#',
      class: 'boton',
      id: i
    })
  }
  $boton.addEventListener('click', function (e) {
    e.preventDefault()
    let button = e.toElement
    let botonClick = button.attributes[2].value
    console.log(botonesList)
    for(let i = 0; i < padre.length; i++){
      let hijo = padre[i].classList.remove('prev')
      hijo = padre[i].classList.remove('active')
    }
    for(let i = 0; i < botonesList[0].children.length; i++){
      botonesList[0].children[i].classList.remove('activo')
    }
    if(botonClick == 1 || botonClick == 3){
      $header.classList.add('scroll')
      $botones.classList.add('scroll')
    }
    if(botonClick== 0 || botonClick == 2 || botonClick == 4){
     $header.classList.remove('scroll')
     $botones.classList.remove('scroll')
    }
    padre[botonClick].classList.add('active')
    button.classList.add('activo')
  })
  $botones.append($boton)
}
botonesList = document.querySelectorAll('.botones')
$boton = document.querySelectorAll('.boton')
console.log($boton)
let botonPadre = botonesList[0].children

function setAttributes($element,attributes) {
  for(const attribute in attributes){
    $element.setAttribute(attribute, attributes[attribute])
  }
}


//detectando scroll en desktop
window.addEventListener( 'mousewheel',function(e){
  for(let i = 0; i < padre.length; i++){
    padre[i].classList.remove('prev')
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
    let boton = botonPadre[i]
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
        if(true){
          next = i + 1
          if(next >= padre.length ){
            next = i;
            window.scrollBy(0, -window.innerHeight);
            console.log("estamos en next")
          }
        } 
        if(false){
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
    if(next == 1 || next == 3){
      $header.classList.add('scroll')
      $botones.classList.add('scroll')
    }
    if(next== 0 || next == 2 || next == 4){
     $header.classList.remove('scroll')
     $botones.classList.remove('scroll')
    }
    console.log(next)
    let siguiente = padre[next];
    let botonSiguiente = botonPadre[next]
    if(hijo.classList[2] == "active" || hijo.classList[3] == "active" || hijo.classList[4] == "active"){

      scroll(hijo,siguiente,boton,botonSiguiente)
      break;
    }
  }
}

function scroll(hijo, siguiente,boton,botonSiguiente){
  hijo.classList.remove('active')
  hijo.classList.add('prev')
  boton.classList.remove('activo')
  siguiente.classList.add('active')
  siguiente.classList.add('animacion')
  botonSiguiente.classList.add('activo')
}

//detectando scroll en movil
gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = touchendX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
}, false); 
//gestos
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

