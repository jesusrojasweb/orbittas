const servicios = document.querySelector('.servicios')
const $header = document.getElementById('header')

window.addEventListener('scroll', function(e){
  let serviciosTop = servicios.getBoundingClientRect().top

  console.log(serviciosTop)
  if(serviciosTop < 100){
    $header.classList.remove('scroll')
    document.body.classList.add('scroll')
  }
  if(serviciosTop > 100){
   $header.classList.add('scroll') 
   document.body.classList.remove('scroll')
  }
})