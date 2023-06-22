const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Sélection de l'élément de la flèche gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('#banner p');
const dots = document.querySelector('.dot');
// Variable pour suivre l'index de la diapositive active
let currentSlideIndex = 0;


// Fonction pour mettre à jour la diapositive active
function updateSlide() {
  const currentSlide = slides[currentSlideIndex];
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  tagLineElement.innerHTML = currentSlide.tagLine;

  // Mise à jour des points
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
  if (currentSlideIndex === slides.length - 1) {
    // Si on est à la dernière diapositive, on revient à la première
    currentSlideIndex = 0;
  } else {
    // Sinon, on passe à la diapositive suivante
    currentSlideIndex += 1;
  }
  updateSlide();
}

// Fonction pour passer à la diapositive précédente
function previousSlide() {
  if (currentSlideIndex === 0) {
    // Si on est à la première diapositive, on passe à la dernière
    currentSlideIndex = slides.length - 1;
  } else {
    // Sinon, on passe à la diapositive précédente
    currentSlideIndex -= 1;
  }
  updateSlide();
}


// Ajout de l'écouteur d'événement sur le clic
arrowLeft.addEventListener('click', previousSlide);


// Ajout de l'écouteur d'événement sur le clic
arrowRight.addEventListener('click', nextSlide);
