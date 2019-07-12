const $sliderList = document.querySelectorAll('.slider')
const $botones = document.querySelector('.botones')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
const $menu = document.querySelectorAll('.menuHeader')
const $header = document.getElementById('header')
const $luz = document.querySelector('.cls-25')
const $copy = document.getElementById('copy')

const $hero = document.querySelector('.hero')
const $valores = document.querySelector('.valores')
const $equipo = document.querySelector('.equipo')


//--------------Burger menu

$burger.addEventListener('click', function (e) {
  $header.classList.add('activo')
})
$close.addEventListener('click', function (e) {
  $header.classList.remove('activo')
})

window.addEventListener('scroll', function (e) {
  let coordsHero = $hero.getBoundingClientRect()
  let coordsValores = $valores.getBoundingClientRect()
  let coordsEquipo = $equipo.getBoundingClientRect()
  console.log(coordsHero.top)
  
  if(coordsHero.top > -100){
    $header.classList.add('fondo')
    $header.classList.remove('scroll')
  }
  if(coordsHero.top <= -100){
    $header.classList.add('scroll')
    $header.classList.add('fondo')
  }
  if(coordsValores.top <= 100){
    $header.classList.remove('fondo')
  }
  if(coordsEquipo.top <= 100){
   $header.classList.add('fondo')
  }
  
})
