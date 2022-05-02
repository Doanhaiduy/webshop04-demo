// count achievement__item
const count1 = document.querySelector('.achievement__item-1 h1')
const count2 = document.querySelector('.achievement__item-2 h1')
const count3 = document.querySelector('.achievement__item-3 h1')
const count4 = document.querySelector('.achievement__item-4 h1')


function counterUp(el, to) {
    let speed = 100
    let from = 0
    let step = to / speed
    const counter = setInterval(function () {
        from += step
        if (from > to) {
            clearInterval(counter)
            el.innerText = to
        } else {
            el.innerText = Math.ceil(from)
        }
    }, 1)
}

$(window).scroll(function () {
    var a = 0;
    var oTop = $('.achievement__list').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        counterUp(count1, 1726)
        counterUp(count2, 362)
        counterUp(count3, 887)
        counterUp(count4, 422)
    }
    a = 1;
});

// show on scroll
let elToShow = document.querySelectorAll('.show-on-scroll')

let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight = window.innerHeight || document.documentElement.clientHeight

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    )
}

function count() {
    elToShow.forEach((item) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            // item.classList.remove('start')
        }
    })
}

// Proressbar scroll
let progress = document.getElementById('proressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
function progressScroll() {
    let progressHeigt = (window.pageYOffset / totalHeight) * 185;
    progress.style.width = progressHeigt + '%';
}
window.addEventListener('scroll', count);
window.addEventListener('scroll', progressScroll);

// Buy course

var buttons = document.querySelectorAll('.course-item__footer-btn');
var buyCourse = document.querySelector('.course-buy__modal');
var btnClose = document.querySelector('.course-buy__close');
var buyCourseContainer = document.querySelector('.course-buy__modal-container');

function hideBuyCourse() {
    buyCourse.classList.toggle('active');
}
buttons.forEach(function (button) {
    button.addEventListener('click', hideBuyCourse)
})

buyCourse.addEventListener('click', hideBuyCourse)
buyCourseContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})
btnClose.addEventListener('click', hideBuyCourse)


// login + register
var closeRegister = document.querySelector('.form-register__close');
var registers = document.querySelectorAll('.sidebar-form');
var formRegister = document.querySelector('.form-register');
var registerContainer = document.querySelector('.form-register__container');

function hideFormRegister() {
    formRegister.classList.toggle('active');
}

registers.forEach(function (register) {
    console.log('duy')
    register.addEventListener('click', hideFormRegister)
})


closeRegister.addEventListener('click', hideFormRegister)
formRegister.addEventListener('click', hideFormRegister)
registerContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})
