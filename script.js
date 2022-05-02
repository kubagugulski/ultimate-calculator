const burger = document.querySelector('.burger')
const barsBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')
const tempBtn = document.querySelector('.tempBtn')
const calculator = document.querySelector('.calculator')
const homeBtn = document.querySelector('.home')

const menu = () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
    barsBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
}

const calcSlide = () => {
    calculator.classList.add('slide')
    menu()
}

const home = () => {
    calculator.classList.remove('slide')
    menu()
}


burger.addEventListener('click', menu)
tempBtn.addEventListener('click', calcSlide)
homeBtn.addEventListener('click', home)