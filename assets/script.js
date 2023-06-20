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



// Sélection de l'élément de la flèche gauche
const arrowLeft = document.querySelector('.arrow_left');

// Ajout de l'écouteur d'événement sur le clic
arrowLeft.addEventListener('click', function() {
    alert("La flèche gauche a été cliquée !");
});

// Sélection de l'élément de la flèche droite
const arrowRight = document.querySelector('.arrow_right');

// Ajout de l'écouteur d'événement sur le clic
arrowRight.addEventListener('click', function() {
    alert("La flèche droite a été cliquée !");
});