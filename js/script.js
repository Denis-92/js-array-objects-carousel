console.log('JS OK!');


/*
creare un carousel di immagini
le immagini sono in un array (array di stringhe)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 secondi la slide avanza automaticamente
*/

// settings

// const NUM_IMAGES = 5;
// TOLTO VECCHIO SET DI IMMAGINI

const CHANGE_IMAGE_DELAY = 5;

// const images = createImageArray(NUM_IMAGES);
// TOLTO VECCHIO SET DI IMMAGINI E INSERISCO QUELLO NUOVO NELLA RIGA SUCCESSIVA
const images = createNewImageArray();


console.log(images);



let activeIndex = 0;
buildCarousel(images, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

leftArrowButton.addEventListener('click', moveCarouselPrevious);


rightArrowButton.addEventListener('click', moveCarouselForward);