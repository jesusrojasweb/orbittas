const $hero = document.querySelector('.hero')
const $header = document.getElementById('header')

window.addEventListener('scroll', function(e){
  let heroTop = $hero.getBoundingClientRect().top

  console.log(heroTop)
  if(heroTop < -100){
    $header.classList.add('scroll')
    $header.classList.remove('fondo')
    // document.body.classList.add('scroll')
  }
  if(heroTop > -100){
   $header.classList.remove('scroll')
   $header.classList.add('fondo')
   // document.body.classList.remove('scroll')
  }
})