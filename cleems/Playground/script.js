// Récupérer les éléments du DOM
const contenu1 = document.getElementById('contenu1');
const contenu2 = document.getElementById('contenu2');
const boutonToggle = document.getElementById('boutonToggle');
const toggleImage = document.getElementById('toggleImage');
const header = document.getElementById('header');

// Fonction pour basculer entre les contenus
function toggleContenu() {
    if (contenu1.style.display === 'block') {
        console.log("contenu 1 affiché")
        contenu1.style.display = 'none';
        contenu2.style.display = 'block';
        header.style.background = 'blue';
        toggleImage.src = '/cleems/Playground/images/terre.jpg';
    } else {
        console.log("contenu 2 affiché")
        contenu1.style.display = 'block';
        contenu2.style.display = 'none';
        header.style.background = 'green';
        toggleImage.src = '/cleems/Playground/images/soleil.jpg';
    }
}

// Ajouter un gestionnaire d'événements au bouton toggle
boutonToggle.addEventListener('click', toggleContenu);
