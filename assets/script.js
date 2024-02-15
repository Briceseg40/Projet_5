const slides = ["slide1.jpg", "slide2.jpg", "slide4.png","slide3.jpg"]
let numero = 2;
function ChangeSlide(sense) {
	numero = numero + sense;
	if (numero > 3)
	{
		numero = 0;
	}
	if (numero < 0)
	{
		numero = 3;
	}
	document.getElementById("banner1").src = "./assets/images/slideshow/" + slides[numero];

	
}
const dots = ["slide1.jpg", "slide2.jpg", "slide4.png","slide3.jpg"]


function Changedots(numero2) {
	document.getElementById("banner1").src = "./assets/images/slideshow/" + dots[numero2];
	
}
function Changeclass(numero2) {
	document.getElementById(numero2).style.backgroundColor = '#fff';
	
}



function ouvrirPage () {
	var a = document.getElementById("#search").value;
}

// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]