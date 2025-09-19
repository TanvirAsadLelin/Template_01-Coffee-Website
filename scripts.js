const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener('click', ()=>{
    console.log('Menu Open Button Clicked');
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener('click', ()=>menuOpenButton.click());

