let tamano = 10
let letras = ['a','b', 'c', 'd']
let logo = []

for(let i = 0; i <= 4; i++){
	logo[i] = document.querySelector("." + letras[i])
}
function aleatorio(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}
setInterval(relleno, 2000)

function relleno() {
	let numero = aleatorio(0,4)
	setTimeout(()=>{
		toggleClass(logo[numero])

	}, 1000)
	toggleClass(logo[numero])
}

function toggleClass(item) {
	item.classList.toggle('activo')	
}