const rightArrow = document.getElementById('rightarrow');
const leftArrow = document.getElementById('leftarrow');
const firstImage = document.getElementById('firstimage');
const secondImage = document.getElementById('secondimage');
const thirdImage = document.getElementById('thirdimage');
const firstCircle = document.getElementById('circleone');
const secondCircle = document.getElementById('circletwo');
const thirdCircle = document.getElementById('circlethree');


let currentSlide = 0;

rightArrow.addEventListener('click', () => changePicture('right'));
leftArrow.addEventListener('click', () => changePicture('left'));
firstCircle.addEventListener('click', () => changePicture(null, 0));
secondCircle.addEventListener('click', () => changePicture(null, 1));
thirdCircle.addEventListener('click', () => changePicture(null, 2));


function changePicture(direction, value){
    if(value || value === 0){
        currentSlide = value;
    }
    if(direction === 'right'){
        currentSlide === 2 ? currentSlide = 0 : currentSlide += 1;
    }
    if(direction === 'left'){
        currentSlide === 0 ? currentSlide = 2 : currentSlide -= 1;
    }
    switch(currentSlide){
        case 0:
            firstImage.hidden = false;
            secondImage.hidden = true;
            thirdImage.hidden = true;
            updateCarouselDot(0);
            break;
        case 1:
            firstImage.hidden = true;
            secondImage.hidden = false;
            thirdImage.hidden = true;
            updateCarouselDot(1);
            break;
        case 2:
            firstImage.hidden = true;
            secondImage.hidden = true;
            thirdImage.hidden = false;
            updateCarouselDot(2);
            break;
    }

}

function updateCarouselDot(slide){
    firstCircle.setAttribute('style', 'background-color: white');
    secondCircle.setAttribute('style', 'background-color: white');
    thirdCircle.setAttribute('style', 'background-color: white');
    switch(slide){
        case 0:
            firstCircle.setAttribute('style', 'background-color: #808080');
            break;
        case 1:
            secondCircle.setAttribute('style', 'background-color: #808080');
            break;
        case 2:
            thirdCircle.setAttribute('style', 'background-color: #808080');
            break;
    }
}