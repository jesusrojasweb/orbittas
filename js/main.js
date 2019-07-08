const $sliderList = document.querySelectorAll('.slider')
const $botones = document.querySelector('.botones')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
const $menu = document.querySelectorAll('.menuHeader')
const $header = document.getElementById('header')
const $luz = document.querySelector('.cls-25')
const $copy = document.getElementById('copy')

const $hero = document.querySelector('.hero')
const $about = document.querySelector('.about')
const $servicios = document.querySelector('.servicios')
const $portafolio = document.querySelector('.portafolio')
const $contacto = document.querySelector('.contacto')

let botonesList
let $boton
const padre = $sliderList[0].children;
let lastScrollTop = 0;
let touchstartY = 0;
let touchstartX = 0;
let touchendX = 0;
let touchendY = 0;
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let gesuredZone = document.querySelector('body');

$luz.addEventListener("mouseover",function () {
  $copy.style.backgroundColor = '#fcd31e80'
})
$luz.addEventListener("mouseout",function () {
  $copy.style.backgroundColor = '#ffffff00'
})


//--------------Burger menu

$burger.addEventListener('click', function (e) {
  $header.classList.add('activo')
})
$close.addEventListener('click', function (e) {
  $header.classList.remove('activo')
})

window.addEventListener('scroll', function (e) {
  let coordsHero = $hero.getBoundingClientRect()
  let coordsAbout = $about.getBoundingClientRect()
  let coordsServicios = $servicios.getBoundingClientRect()
  let coordsPortafolio = $portafolio.getBoundingClientRect()
  let coordsContacto = $contacto.getBoundingClientRect()
  console.log(coordsHero.top)
  
  if(coordsHero.top > -100){
    $header.classList.remove('scroll')
  }
  if(coordsHero.top <= -100){
    $header.classList.add('scroll')
  }
  if(coordsAbout.top <= 250){
    $about.classList.add('animacion')
    
  }
  if(coordsServicios.top <= 250){
    $servicios.classList.add('animacion')
  }
  if(coordsPortafolio.top <= 250){
    $portafolio.classList.add('animacion')
  }
  if(coordsContacto.top <= 250){
    $contacto.classList.add('animacion')
  }
  
})

// $about.addEventListener('scroll', function (e) {
//   let coordsHijo = $about.children[0].getBoundingClientRect()
//   console.log(`top: ${coordsHijo.top}`)
//   console.log(`Height: ${$about.getBoundingClientRect().height}`)
//   console.log(`bottom < alto: ${coordsHijo.top < $about.getBoundingClientRect().height}`)

// })

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
    padre[botonClick].classList.add('animacion')
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
// window.addEventListener( 'mousewheel',function(e){
//   for(let i = 0; i < padre.length; i++){
//     padre[i].classList.remove('prev')
//   }
//   if(e.deltaY > 0){
//     slide(true,false)
//   }
//   if(e.deltaY < 0){
//     slide(false,false)
//   }
// })

function scroll(hijo, siguiente,boton,botonSiguiente){
  hijo.classList.remove('active')
  hijo.classList.add('prev')
  boton.classList.remove('activo')
  siguiente.classList.add('active')
  siguiente.classList.add('animacion')
  botonSiguiente.classList.add('activo')
}
