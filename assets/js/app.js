let lastScroll = 0;
const defaultOffset = 500;
const header = document.querySelector('.header');
// const totop = document.querySelector('.totop');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
// const containFixed = () => totop.classList.contains('fixed');
// && !containFixed() && containFixed()
window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
        //   totop.classList.add('fixed');
    } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('hide');
        //   totop.classList.remove('fixed');
    }

    lastScroll = scrollPosition();
})

// ================= Burger JS
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navLink = document.querySelectorAll('.nav__link')

burger.addEventListener('click', function() {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
});

navLink.forEach(n => n.addEventListener('click', sloseMenu));

function sloseMenu() {
    nav.classList.remove('open');
    burger.classList.remove('open');
}

// Goup To-Top
// const toTop = document.querySelector('.totop');
// window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 500) {
//         toTop.classList.add('active');
//     } else {
//         toTop.classList.remove('active');
//     }
// });
// toTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

//============= Scroll
let heade = document.querySelector('.header');
let doc = document.documentElement;

const obs = new ResizeObserver(enrties => {
    let h = enrties[0].target.offsetHeight;
    doc.style.setProperty('--nav-padding', `${h}px`);
});
obs.observe(header);

//============= Jsslides
const jsslides = document.querySelectorAll('.jsslide'),
    prev = document.getElementById('btn__prev'),
    next = document.getElementById('btn__next'),
    dots = document.querySelectorAll('.dot');
let index = 0;
const activeJsslide = n => {
    for (jsslide of jsslides) {
        jsslide.classList.remove('active');
    }
    jsslides[n].classList.add('active');
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const prepareCurrentJsslide = ind => {
    activeJsslide(ind);
    activeDot(ind);
}
const nextJsslide = () => {
    if (index == jsslides.length - 1) {
        index = 0;
        prepareCurrentJsslide(index);
    } else {
        index++;
        prepareCurrentJsslide(index);
    }
}
const prevJsslide = () => {
    if (index == 0) {
        index = jsslides.length - 1
        prepareCurrentJsslide(index);
    } else {
        index--;
        prepareCurrentJsslide(index);
    }
}
dots.forEach((item, indexDot) => (
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentJsslide(index);
    })
))
next.addEventListener('click', nextJsslide);
prev.addEventListener('click', prevJsslide);