const lines = document.querySelector('.lines')
const line = document.querySelectorAll('.line')
const navlist = document.querySelector('.navlist')



function showNav(){
    navlist.classList.toggle('show-navlist')
    line[0].classList.toggle('top')
    line[1].classList.toggle('middle')
    line[2].classList.toggle('bottom')
}

lines.addEventListener('click', showNav)





