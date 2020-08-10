let btn = document.querySelector('.buscador-barra i')
let buscar = document.querySelector('.buscador-barra input')
let form = document.querySelector('.buscador-barra')
buscar.style.display = 'none'
btn.addEventListener('click', () => {
  if(buscar.style.display=='none'){
    buscar.style.display = 'block'
    buscar.style.animation = 'aparecer 1s ease'
    form.style.borderTopLeftRadius = '0%'
    form.style.borderBottomLeftRadius = '0%'
  }else{
    buscar.style.animation = 'desaparecer 1s ease'
    setTimeout(() => {
      buscar.style.display = 'none'
    },1000) 
    form.style.borderRadius = '50%'
  }
})