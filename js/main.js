const $sliderList = document.querySelectorAll('.slider')
const $botones = document.querySelector('.botones')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
const $menu = document.querySelectorAll('.menuHeader')
const $header = document.getElementById('header')
const $luz = document.querySelector('.cls-25')
const $copy = document.getElementById('copy')
const $desarrollamos = document.getElementById('desarrollamos')
const cursor = document.querySelector('.cursor')

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

// ---------------------------
let termino = false
let segunda = false
let interval
let count = 0

const des = 'Nosotros la desarrollamos'

function escritura(palabra, html, segunda) {
  interval = setInterval(()=> escribir(palabra, html, segunda), 100)
}
function escribir(palabra, html, segunda) {
  let array = palabra.split('')

  if(count < array.length){
    
    html.innerHTML += array[count]
    count++
  } 
  if(count > (array.length -1)){
    clearInterval(interval)
    console.log("termino")
    cursor.style.display = 'none'
    count = 0
  }
}

escritura(des, $desarrollamos, false)






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
  if(coordsAbout.top <= 95){
    $about.classList.add('animacion')
    $header.classList.add('fondo')
  }
  if(coordsServicios.top <= 95){
    $servicios.classList.add('animacion')
    $header.classList.remove('fondo')
  }
  if(coordsPortafolio.top <= 95){
    $portafolio.classList.add('animacion')
    $header.classList.add('fondo')
  }
  if(coordsContacto.top <= 95){
    $contacto.classList.add('animacion')
    $header.classList.remove('fondo')
  }
  
})