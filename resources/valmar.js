//JS for changing nav header color on scroll

//const nav = document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {

    if (window.scrollY >= 50) {
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav');
    }

})

const headerTag = document.querySelector('selected');

window.addEventListener('scroll', ()=> {

    if (window.scrollY >= 50) {
        headerTag.classList.add('unselected');
    } else {
        headerTag.classList.remove('unselected');
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


//Search Engine

let searchable = [

'<a href="budweiser.html">budweiser</a>',
'<a href="hennessey.html">hennessey</a>',
'<a href="1800s.html">1800</a>',
'<a href="1800s.html">1800 anejo 750 ml</a>',
'<a href="1800s.html">1800 coconut 750 ml</a>',
'<a href="1800s.html">1800 reposado 200 ml</a>',
'<a href="1800s.html">1800 reposado 375 ml</a>',
'<a href="1800s.html">1800 reposado 750 ml</a>',
'<a href="1800s.html">1800 rtd 1.75 ml black cherry</a>',
'<a href="1800s.html">1800 rtd 1.75 ml mango</a>',
'<a href="1800s.html">1800 rtd 1.75 ml peach</a>',
'<a href="1800s.html">1800 rtd 1.75 ml pineapple</a>',
'<a href="1800s.html">1800 rtd 1.75 ml raspberry</a>',
'<a href="1800s.html">1800 rtd 1.75 ml strawberry</a>',
'<a href="1800s.html">1800 rtd 1.75 ml watermelon</a>',
'<a href="1800s.html">1800 silver 200 ml</a>',
'<a href="1800s.html">1800 silver 375 ml</a>',
'<a href="1800s.html">1800 silver 750 ml</a>',

];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
let results = [];
let input = searchInput.value;
if (input.length) {
    results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
    });
}

renderResults(results);

});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    const content = results.map((item) => {
        return `<li><a href='#'>${item}</a></li>`;
    })
    .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}


