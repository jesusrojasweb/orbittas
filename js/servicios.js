const $hero = document.querySelector('.hero')
const $header = document.getElementById('header')
const $proyectos = document.getElementById('proyectos')
const $electronica = document.getElementById('electronica')
const $web = document.getElementById('web')
const $movil = document.getElementById('movil')

const $botonProyectos = document.querySelector('.heroProyectos')
const $botonElec = document.querySelector('.heroElec')
const $botonWeb = document.querySelector('.heroWeb')
const $botonMovil = document.querySelector('.heroMovil')

window.addEventListener('scroll', function(e){
  let heroTop = $hero.getBoundingClientRect().top

  if(heroTop < -100){
    $header.classList.add('scroll')
    $header.classList.remove('fondo')
  }
  if(heroTop > -100){
   $header.classList.remove('scroll')
   $header.classList.add('fondo')
  }
})

function smoothScroll(target, duration) {
  let targe = document.getElementById(target);
  let targetPosition = targe.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currenTime) {
    if(startTime === null) startTime = currenTime;
    let timeElepsed = currenTime - startTime;
    let run = ease(timeElepsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElepsed < duration) requestAnimationFrame(animation);
  }
  function ease(t,b,c,d) {
    t /= d/ 2;
    if(t <1) return c/ 2 * t * t +b;
    t--;
    return -c / 2 * (t*(t-2)-1)+b;
  }

  requestAnimationFrame(animation)
  
}

function addListener(boton,seccion) {
  boton.addEventListener('click', function () {
    smoothScroll(seccion, 1000);
  })
}

addListener($botonProyectos, 'proyectos')
addListener($botonElec, 'electronica')
addListener($botonWeb, 'web')
addListener($botonMovil, 'movil')