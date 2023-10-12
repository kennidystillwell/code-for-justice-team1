// by clicking in the nav indicators, move to that slide
const track = document.querySelector('.galery_track');
const slide = Array.from(track.children);
const nextButton = document.querySelector('.galery_button--right');
const prevButton = document.querySelector('.galery_button--left');
const dotsNav =  document.querySelector('.galery_nav')
const dots = Array.from(dotsNav.children);


const slideWidth = slide[0].getBoundingClientRect().width;
//console.log(slidewidth);

slides[0].style.left = 0;
slide[1].style.left = slideWith + 'px';
