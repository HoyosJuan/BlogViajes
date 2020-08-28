let btnMobile = document.querySelector('#btnMobil');
let cerrarMenu = document.querySelector('#cerrarMobile')
let menuMobile = document.querySelector('#menuMobile')

console.log(btnMobile)
console.log(menuMobile)

btnMobile.addEventListener('click', () => {
  menuMobile.style.left = '0%';
})
cerrarMenu.addEventListener('click', () => {
  menuMobile.style.left = '-100%'
})