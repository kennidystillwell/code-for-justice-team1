const track = document.querySelector('.galery_track');
const slide = Array.from(track.children);
const nextButton = document.querySelector('.galery_button--right');
const prevButton = document.querySelector('.galery_button--left');
const dotsNav =  document.querySelector('.galery_nav')
const dots = Array.from(dotsNav.children);


const slideWidth = slide[0].getBoundingClientRect().width + 150;

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slide.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide ) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slide, prevButton, nextButton, targetIndex) => {
    if (targetIndex == 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slide.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slide.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
    hideShowArrows(slide, prevButton, nextButton, prevIndex);
});


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slide.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide); 
updateDots(currentDot, nextDot);
hideShowArrows(slide, prevButton, nextButton, nextIndex);
    


});

dotsNav.addEventListener('click', e => {
    
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slide[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slide, prevButton, nextButton, targetIndex);
});

function myFunction() {
    alert("please call to this number: (xxx) xxx-xxx or write to us by email: ricardop9701@example.com ");}

