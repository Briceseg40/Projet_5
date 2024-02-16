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
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	}
]

let numero = 0;
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
	for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_selected');
    }
    dots[numero].classList.add('dot_selected');
	
	document.getElementById("banner1").src = "./assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagLine").innerHTML = slides[numero].tagLine;

	
}

const dots = document.querySelectorAll('.dot'); 

function Changedots(numero) {
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_selected');
    }
    dots[numero].classList.add('dot_selected');
	
	document.getElementById("banner1").src = "./assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagLine").innerHTML = slides[numero].tagLine;

}


