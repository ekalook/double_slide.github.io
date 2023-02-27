const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlides = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changesSlide('up'))
downButton.addEventListener('click', () => changesSlide('down'))

const changesSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlides ++
        if(activeSlides > slidesLength -1) {
            activeSlides = 0
        }
    } else if(direction === 'down') {
        activeSlides --
        if(activeSlides < 0) {
            activeSlides = slidesLength -1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlides * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlides * sliderHeight}px)`

}