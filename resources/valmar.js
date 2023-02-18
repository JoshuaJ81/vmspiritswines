//JS for changing nav header color on scroll

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {

    if (window.scrollY >= 50) {
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav');
    }

})


//hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

//did a "for each" link when clicked, the hamburger and navmenu will go away, hence "removed"

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))



