const $header = document.getElementById('header')
const $burger = document.getElementById('burger')
const $close = document.getElementById('close')
$burger.addEventListener('click', function (e) {
  $header.classList.add('activo')
})
$close.addEventListener('click', function (e) {
  $header.classList.remove('activo')
})