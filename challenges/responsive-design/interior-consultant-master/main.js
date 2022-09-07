const openWindow = document.querySelector('#open-navbar');
const navbar = document.querySelector('.nav-bar');
const lines = document.querySelectorAll('.line');

function openNavbar(){
    navbar.classList.toggle('show-window');
    lines[0].classList.toggle('line-1');
    lines[1].classList.toggle('line-2');
    lines[2].classList.toggle('line-3');
}

openWindow.addEventListener('click', openNavbar);