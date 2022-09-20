const menuHamburger = document.querySelector('.menu-hamburger');
const lines = document.querySelectorAll('.line');
const menuBar = document.querySelector('.menubar-list');


function showMenubar(){

    menuBar.classList.toggle('show')
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');
}

menuHamburger.addEventListener('click', showMenubar);