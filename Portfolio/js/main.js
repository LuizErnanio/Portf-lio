
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-mobile')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu-mobile')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu-mobile')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu-mobile')
})