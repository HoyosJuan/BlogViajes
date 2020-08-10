let itemBanner = document.getElementsByClassName('item-banner')
let focusBanner = document.getElementsByClassName('focus-item')
const banner = document.querySelector('.banner-header')
itemBanner[0].addEventListener('mouseover', () =>{
  for(let i = 0; i<itemBanner.length ; i++){
    if(i!=0){
      focusBanner[i].style.transform = "translateY(150%)"
      itemBanner[i].style.background = "rgba(0,0,0,.4)"
    }
  }
  focusBanner[0].style.transform = "translateY(0%)";
  itemBanner[0].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-1.jpg)`
})
itemBanner[1].addEventListener('mouseover', () =>{
  for(let i = 0; i<itemBanner.length ; i++){
    if(i!=1){
      focusBanner[i].style.transform = "translateY(150%)";
      itemBanner[i].style.background = "rgba(0,0,0,.4)"
    }
  }
  focusBanner[1].style.transform = "translateY(0%)";
  itemBanner[1].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-2.jpeg)`
})
itemBanner[2].addEventListener('mouseover', () =>{
  for(let i = 0; i<itemBanner.length ; i++){
    if(i!=2){
      focusBanner[i].style.transform = "translateY(150%)";
      itemBanner[i].style.background = "rgba(0,0,0,.4)"
    }
  }
  focusBanner[2].style.transform = "translateY(0%)";
  itemBanner[2].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-3.jpeg)`
})
itemBanner[3].addEventListener('mouseover', () =>{
  for(let i = 0; i<itemBanner.length ; i++){
    if(i!=3){
      focusBanner[i].style.transform = "translateY(150%)";
      itemBanner[i].style.background = "rgba(0,0,0,.4)"
    }
  }
  focusBanner[3].style.transform = "translateY(0%)";
  itemBanner[3].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-4.jpeg)`
})
let itemUno = document.querySelector('#selectItemUno')
let itemDos = document.querySelector('#selectItemDos')
let itemTres = document.querySelector('#selectItemTres')
let itemCuatro = document.querySelector('#selectItemCuatro')

itemUno.addEventListener('click', () => {
  itemBanner[0].style.display= 'grid'
  itemBanner[1].style.display= 'none'
  itemBanner[2].style.display= 'none'
  itemBanner[3].style.display= 'none'
  focusBanner[0].style.transform = "translateY(0%)";
  itemBanner[0].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-1.jpg)`
})
itemDos.addEventListener('click', () => {
  itemBanner[0].style.display= 'none'
  itemBanner[1].style.display= 'grid'
  itemBanner[2].style.display= 'none'
  itemBanner[3].style.display= 'none'
  
  focusBanner[1].style.transform = "translateY(0%)";
  itemBanner[1].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-2.jpeg)`
})
itemTres.addEventListener('click', (e) => {
  e.target.style.background = "#fff";
  itemBanner[0].style.display= 'none'
  itemBanner[1].style.display= 'none'
  itemBanner[2].style.display= 'grid'
  itemBanner[3].style.display= 'none'
  focusBanner[2].style.transform = "translateY(0%)";
  itemBanner[2].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-3.jpeg)`
})
itemCuatro.addEventListener('click', (e) => {
  
  for(let i = 0; i< liItem.length ; i++){
    liItem[i].style.background = "rgba(255, 255, 255, 0.5)"
  }
  e.target.style.background = "#fff";
  itemBanner[0].style.display= 'none'
  itemBanner[1].style.display= 'none'
  itemBanner[2].style.display= 'none'
  itemBanner[3].style.display= 'grid'
  focusBanner[3].style.transform = "translateY(0%)";
  itemBanner[3].style.background = "rgba(0,0,0,0)"
  banner.style.backgroundImage = `url(./images/slider-4.jpeg)`
})