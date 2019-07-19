const $header = document.getElementById('header')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
const $hero = document.querySelector('.contacto') || document.querySelector('.portafolio')
$burger.addEventListener('click', function (e) {
  $header.classList.add('activo')
})
$close.addEventListener('click', function (e) {
  $header.classList.remove('activo')
})

window.addEventListener('scroll', function (e) {
  let coordsHero = $hero.getBoundingClientRect()
  
  if(coordsHero.top > -100){
    $header.classList.remove('scroll')
  }
  if(coordsHero.top <= -100){
    $header.classList.add('scroll')
  }
  
})