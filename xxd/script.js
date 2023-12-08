let switchtheme = document.querySelector('#switch');
let theme;


console.log(localStorage)

theme = localStorage.getItem('theme')
switchtheme.classList.add(theme)

console.log(theme)
localStorage.clear()
switchtheme.addEventListener('click', changetheme);

function changetheme() {
    if (switchtheme.classList.contains('light')) {
        switchtheme.classList.remove('light')
        switchtheme.classList.add('dark')
        theme = 'dark';
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('label').innerHTML = '☀️'
        localStorage.setItem('theme', 'light')
        } else {
            switchtheme.classList.remove('dark')
            switchtheme.classList.add('light');  
            theme = 'light';
            document.querySelector('body').style.backgroundColor = 'black'
            document.querySelector('label').innerHTML = '🌙'
            localStorage.setItem('theme', 'dark')
        }

} 

changetheme()