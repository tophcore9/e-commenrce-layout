let nav = document.getElementsByClassName('nav')[0];
let navMenu = document.getElementsByClassName('nav_menu')[0];
let menuOpener = document.getElementsByClassName('menu_opener')[0];
let isOpen = false;

menuOpener.addEventListener('click', function () {
    if (!isOpen) {
        menuOpener.style.transform = 'rotate(180deg)';

        navMenu.classList.add('sliding-nav_menu');
        nav.classList.add('sliding-nav');
    }
    else {
        menuOpener.style.transform = 'rotate(0)';

        navMenu.classList.remove('sliding-nav_menu');
        nav.classList.remove('sliding-nav');
    }

    isOpen = !isOpen;
})