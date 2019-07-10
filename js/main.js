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
    $header.classList.remove('fondo')
  }
  if(coordsAbout.top <= 100){
    $about.classList.add('animacion')
    $header.classList.add('fondo')
  }
  if(coordsServicios.top <= 100){
    $servicios.classList.add('animacion')
    $header.classList.remove('fondo')
  }
  if(coordsPortafolio.top <= 100){
    $portafolio.classList.add('animacion')
    $header.classList.add('fondo')
  }
  if(coordsContacto.top <= 100){
    $contacto.classList.add('animacion')
    $header.classList.remove('fondo')
  }
  
})
