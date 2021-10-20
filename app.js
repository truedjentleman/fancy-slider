const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide');  // get the element with 'main-slide' class
const slidesCount =  mainSlide.querySelectorAll('div').length;     // get the number of all divs with slides in mainSlides, length of array/collection

let activeSlideIndex = 0;   //  the first slide index = 0, the last slide index 'slidesCount - 1'

//move sidebar by adding property "top" to 'sidebar', in order left and right part color match
//number of slides minus 1 * 100vh (height of the viewport ),  as we have one slide on a screen initially
//Viewport = the browser window size. If the viewport is 50cm high, 1vh = 0.5cm.
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;  // insert dynamic value to string using `$`

upBtn.addEventListener('click', () => {    // event listener for click
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown', event => {    // event listener for keys
    console.log(event.key)  // to see key of pushed key
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})


function changeSlide(direction) {   // event handler. Choose the click 'direction'
    if (direction === 'up')   {// if clicked 'up'
    activeSlideIndex ++  // increase by 1.  from 0 to slidesCount - 1
        if (activeSlideIndex === slidesCount) {  //  if counter is become equal number of slides, change it to ZERO
            activeSlideIndex = 0
            }
    } else if (direction === 'down') {  // if clicked 'down'
        activeSlideIndex --     // reduce by 1    
        if (activeSlideIndex < 0) {    //    //  if counter is become < 0 change it's value for the index of last slide
            activeSlideIndex = slidesCount -1  //
        }
    }
    const height = container.clientHeight  // get the main container height - height of the active area of browser window
    // console.log(height);
     
    // to slide right part of document
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;   // add the property to 'mainSlide' element
    // to slide left part of document
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;   // add the property to 'sideBar' element
}