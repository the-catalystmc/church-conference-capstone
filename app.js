
const menuBtn = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.mobile-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelector('.menu-list');

// ------------FUNCTION DECLARATIONS FOR MOBILE MENU-------------
const openMenu = () => {
    mobileMenu.style.display = 'block';
    menuBtn.style.display = 'none';
}

const closeMenu = () => {
    mobileMenu.style.display = 'none';
    menuBtn.style.display = 'block';
}

// ------------FUNCTION CALLS FOR MOBILE MENU-----------
menuBtn.addEventListener('click', () => {
    openMenu()
})

closeBtn.addEventListener('click', () => {
    closeMenu()
})

menuItem.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'A') {
        closeMenu();
      }
})

