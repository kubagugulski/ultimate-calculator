const burger = document.querySelector('.burger')
const barsBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')
const tempBtn = document.querySelector('.tempBtn')
const calcBtn = document.querySelector('.calcBtn')
const calculator1 = document.querySelector('.calculator1')
const calculator2 = document.querySelector('.calculator2')
const homeBtn = document.querySelector('.home')
const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convertBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const swapBtn = document.querySelector('.swap')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
let farenheit
let celsius

//slider

const menu = () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
    barsBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
}

const calcSlide = () => {
    calculator1.classList.add('slide')
    calculator2.classList.remove('slide')
    menu()
}

const home = () => {
    calculator1.classList.remove('slide')
    calculator2.classList.remove('slide')
    menu()
}

// temp calc

const swap = () => {
    if (one.textContent == 'Celsius') {
        one.textContent = 'Farenheit'
        two.textContent = 'Celsius'
        result.textContent = ''
    } else {
        one.textContent = 'Celsius'
        two.textContent = 'Farenheit'
        result.textContent = ''
    }
}

const celToFar = () => {
    farenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C equals ${farenheit.toFixed(1)}°F`
    converter.value = ''
}

const farToCel = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F equals ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === 'Celsius') {
            celToFar()
        } else {
            farToCel()
        }
    } else {
        result.textContent = 'No data!'
    }
}

const reset = () => {
    result.textContent = ''
    converter.value = ''
}

const calc2Slide = () => {
    calculator1.classList.remove('slide')
    calculator2.classList.add('slide')
    menu()
}


burger.addEventListener('click', menu)
tempBtn.addEventListener('click', calcSlide)
homeBtn.addEventListener('click', home)
swapBtn.addEventListener('click', swap)
convertBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
calcBtn.addEventListener('click', calc2Slide)