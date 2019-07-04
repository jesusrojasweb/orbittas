const $detalle = document.querySelector('.detalle')
const $hover = document.querySelector('.hover')
const $detalleClose = document.querySelector('.detalleClose')
const $boton = document.querySelector('.boton')
let contador = 0;

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
	toggle()
	contador = 1;
})

$detalleClose.addEventListener('click', function (e) {
	toggle()
	contador = 0;
})

function toggle(e) {
	$detalle.classList.toggle('active')
	$hover.classList.toggle('active')
}