const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']; //Def Konami code
let tab = []; //liste touche press
let i = 0; //compteur
let activated = false;




addEventListener('keydown', (e) => {

    console.log(e.key);
    console.log(tab);



    if (e.key === konami[i] && activated == false) {

        tab.push(e.key)

        i++;
            
    } else {
        tab = [];
        i = 0;
    }
        
    if (tab.length == konami.length) {
        activated = true;
        console.log('Konami Activé');
        document.querySelector('body').innerHTML = '<h1> KONAMI CODE ACTIVATED </h1>';
    };

    if (e.key=="Escape" && activated == true) {
        activated = false ;
        window.location.reload();
    }
});

