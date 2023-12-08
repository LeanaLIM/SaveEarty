// Récupérer les éléments du DOM
const contenu1 = document.getElementById('contenu1');
const contenu2 = document.getElementById('contenu2');
const boutonToggle = document.getElementById('boutonToggle');
const toggleImage = document.getElementById('toggleImage');
const header = document.getElementById('header');
const themeLink = document.getElementById('theme');


// Fonction pour basculer entre les contenus
function toggleContenu() {
    if (contenu1.style.display === 'block') {
        console.log("contenu 1 affiché")
        contenu1.style.display = 'none';
        contenu2.style.display = 'block';
        // header.style.background = 'blue';
        toggleImage.src = '/cleems/Playground/images/SVG_NOEL.svg';
        setTheme('--background-color', 'blue'); // Couleur de fond lorsque la case est cochée
        setTheme('--text-color', '#333'); // Couleur du texte lorsque la case est cochée

    } else {
        console.log("contenu 2 affiché")
        contenu1.style.display = 'block';   
        contenu2.style.display = 'none';
        // header.style.background = 'green';
        toggleImage.src = '/cleems/Playground/images/SVG_.svg';
        setTheme('--background-color', '#fff'); // Couleur de fond par défaut
        setTheme('--text-color', '#333'); // Couleur du texte par défaut
    }

    // Fonction pour définir une variable CSS
function setTheme(variable, value) {
    document.documentElement.style.setProperty(variable, value);
}

}

// Ajouter un gestionnaire d'événements au bouton toggle
boutonToggle.addEventListener('click', toggleContenu);
