const rightArrow = document.getElementById('rightarrow');
const leftArrow = document.getElementById('leftarrow');
const smallPictures = Array.from(document.getElementsByClassName('rowpic'));
const commercialSmallPictures = Array.from(document.getElementsByClassName('commercial'));
const pictureRow = document.querySelector('.picturerow');
const carouselImage = document.getElementById('firstimage');
const residentialOption = document.getElementById('residentialtitle');
const commercialOption = document.getElementById('commercialtitle');
const residentialCarousel = document.getElementById('residentialcarousel');
const residentialPictures = ['./pictures/pexels-photo-259751.jpeg', './pictures/pexels-photo-secondhouse.jpeg', './pictures/pexels-photo-259751.jpeg', './pictures/roof-plate-tiles-brick-black-48882.jpeg','./pictures/roof-plate-tiles-brick-black-48882.jpeg']
const commercialPictures = ['./pictures/pexels-photo-secondhouse.jpeg','./pictures/pexels-photo-secondhouse.jpeg','./pictures/person-24px.svg','./pictures/pexels-photo-secondhouse.jpeg','./pictures/pexels-photo-259751.jpeg']
let currentPictureIndex = 0;

pictureRow.addEventListener('click', (e) => smallPictureClick(e))
rightArrow.addEventListener('click', () => nextImageRight());
leftArrow.addEventListener('click', () => nextImageLeft());
residentialOption.addEventListener('click', () => changeToResidentialCarousel());
commercialOption.addEventListener('click', () => changeToCommercialCarousel());


function nextImageRight(){
    if(currentPictureIndex === 4){ 
        currentPictureIndex = 0;
        greyOutSmallPicture(smallPictures[currentPictureIndex]);
        carouselImage.setAttribute('src', smallPictures[currentPictureIndex].getAttribute('src'));
    }
    else{
        carouselImage.setAttribute('src', smallPictures[currentPictureIndex + 1].getAttribute('src'));
        currentPictureIndex = currentPictureIndex + 1;
        greyOutSmallPicture(smallPictures[currentPictureIndex]);
    }
}

function nextImageLeft(){
    if(currentPictureIndex === 0){
        currentPictureIndex = 5;
    }
    carouselImage.setAttribute('src', smallPictures[currentPictureIndex - 1].getAttribute('src'));
    currentPictureIndex = currentPictureIndex - 1;
    greyOutSmallPicture(smallPictures[currentPictureIndex]);
}

function smallPictureClick(e){
    if(e.target.className != 'picturerow' && e.target.id != "empty"){
        console.log("true");
        smallPictures.forEach((pic, i) => {
            if(pic === e.target){
                currentPictureIndex = i;
            }
            pic.setAttribute('style', '');
        })
        carouselImage.setAttribute('src', e.target.src);
        e.target.setAttribute('style', 'filter: brightness(50%);');
    }
}

function greyOutSmallPicture(img){
    smallPictures.forEach((pic, i) => {
        pic.setAttribute('style', '');
    })
    img.setAttribute('style', 'filter: brightness(50%);')
}

function changeToResidentialCarousel(){
    commercialOption.removeAttribute('style');
    commercialOption.setAttribute('style', 'color: #AAAAAA')
    residentialOption.setAttribute('style', 'border-bottom: 1px solid black; color: #546a7b;')
    greyOutSmallPicture(smallPictures[0]);
    carouselImage.setAttribute('src', residentialPictures[0]);
    currentPictureIndex = 0;
    for(i = 0; i < residentialPictures.length; i++){
        smallPictures[i].setAttribute('src', residentialPictures[i])
    }

}

function changeToCommercialCarousel(){
    residentialOption.removeAttribute('style');
    residentialOption.setAttribute('style', 'color: #AAAAAA')
    commercialOption.setAttribute('style', 'border-bottom: 1px solid black; color: #546a7b;')
    currentPictureIndex = 0;
    greyOutSmallPicture(smallPictures[0]);
    carouselImage.setAttribute('src', commercialPictures[0]);
    for(i = 0; i < commercialPictures.length; i++){
        smallPictures[i].setAttribute('src', commercialPictures[i])
    }
}