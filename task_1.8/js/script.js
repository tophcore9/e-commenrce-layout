let nav = document.getElementsByClassName('nav')[0];
let initialNav = window.getComputedStyle(nav);

let navMenu = document.getElementsByClassName('nav_menu')[0];
let navItems = document.getElementsByClassName('nav_item');

let menuOpener = document.getElementsByClassName('menu_opener')[0];
let menuBlur = document.getElementsByClassName('burger_menu-blur')[0];
let isOpen = false;

menuOpener.addEventListener('click', function () {
    if (!isOpen) {
        nav.style.height = '290px';
        menuOpener.style.transform = 'rotate(180deg)';

        Object.assign(navMenu.style, {
            position: 'absolute',
            display: 'flex',
            opacity: '1',
            flexDirection: 'column',
            gap: '5px',
            top: '100px',
            left: '0px',
            width: '100%',
            textAlign: 'center'
        })

        Object.assign(menuBlur.style, {
            top: '290px',
            opacity: 0.8,
            visibility: 'visible'
        })
        
        Array.from(navItems).forEach(navItem => {
            Object.assign(navItem.style, {
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })
        })
    }
    else {
        nav.style = initialNav;
        menuOpener.style.transform = 'rotate(0)';
        navMenu.style.display = 'none';
        Object.assign(menuBlur.style, {
            visibility: 'hidden',
            opacity: 0
        })
    }

    isOpen = !isOpen;
})