window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
let deplacement = (window.scrollY / (document.body.offsetHeight - window.innerHeight))*100;
document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
console.log(deplacement);// Affiche le contenu de la variable maVariable dans la console du navigateur
});

function myScroll() { // Définition de la fonction de scroll *(event.clientX/window.innerWidth)
   

	window.onclick = function printMousePos(event) {
	var progress = document.getElementById('progress_bar').value;
	let deplacement = (window.scrollY / (document.body.offsetHeight - window.innerHeight))*100;
	
	window.scroll(0,progress*11+deplacement*0.7);
}
}
