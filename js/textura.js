let tamano = 10
let logo = []

for(let i = 0; i < 10; i++){
	logo[i] = document.getElementById(i+1)
}
console.log(logo)
function aleatorio(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}
setInterval(relleno, 2000)

function relleno() {
	let numero = aleatorio(0,10)
	console.log(numero)
	setTimeout(()=>toggleClass(logo[numero]), 1000)
	toggleClass(logo[numero])
}

function toggleClass(item) {
	item.classList.toggle('activo')	
}