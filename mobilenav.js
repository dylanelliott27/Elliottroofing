const hamburgerMenuButton = document.getElementById('burger');
const navUnorderedList = document.getElementById('navunorderedlist');
const navitems = document.getElementsByClassName('navitem');
const hamburgerMenu = document.getElementById('hamburgermenu');
const navItemArray = Array.from(navitems); //since getelementsbyclass name returns htmlcollection, convert to iterable array


let navOpenStatus = false;

hamburgerMenuButton.addEventListener('click', () => {
    switch(navOpenStatus){
        case false:
            navItemArray.forEach(item => {
                item.setAttribute('style', 'display: block');
            })
            navUnorderedList.setAttribute('class', 'mobilenav');
            navOpenStatus = true;
            hamburgerMenu.setAttribute('src', './close-24px.svg');
            break;
        case true:
            navItemArray.forEach(item => {
                item.removeAttribute('style', 'display: none');
            })
            navUnorderedList.classList.remove('mobilenav')
            navOpenStatus = false;
            hamburgerMenu.setAttribute('src', 'menu-24px.svg');
            break;
    }

})