const $detalle = document.querySelector('.detalle')
const $hover = document.querySelector('.hover')
const $detalleClose = document.querySelector('.detalleClose')
const $boton = document.querySelector('.boton')
const $header = document.getElementById('header')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
$burger.addEventListener('click', function (e) {
  $header.classList.add('activo')
})
$close.addEventListener('click', function (e) {
  $header.classList.remove('activo')
})
let contador = 0;
let ancho = window.screen.availWidth;

window.addEventListener( 'mousewheel',function(e){
	console.log(contador);
	if(e.deltaY > 0){
	  
		if(contador == 0){
			toggle()
			contador = 1;
		}
	}
})


$boton.addEventListener('click', function (e) {
	e.preventDefault()
	if(ancho > 800){
		toggle()
		contador = 1;
	}
	console.log(ancho)
	if(ancho < 800){
		smoothScroll('.detalle', 1000);
		console.log('clickeaste')
	}
	
})

$detalleClose.addEventListener('click', function (e) {
	toggle()
	contador = 0;
})

function toggle(e) {
	$detalle.classList.toggle('active')
	$hover.classList.toggle('active')
}
function smoothScroll(target, duration) {
  let targe = document.querySelector(target);
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