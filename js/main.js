const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const menuShadow = document.querySelector('.menu-is-close');
console.log(menuBtn);
console.log(menuClose);
console.log(menuList);

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu-list-open');
    menuShadow.classList.toggle('menu-is-open');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu-list-open');
    menuShadow.classList.remove('menu-is-open');
});