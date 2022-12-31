

//        check if toggle button is in dark mode or light mode.
//        change class of toggle element on click
function changeMode(){

    const mode = document.getElementById('toggle-btn');

    if(mode.classList.contains('dark')){
        mode.classList.add("light");
        mode.classList.remove("dark");
    }else{
        mode.classList.add('dark');
        mode.classList.remove('light');
    }

    const darkMode = document.getElementById('star-bg');
    const star1 = document.getElementById('stars');
    const star2 = document.getElementById('stars2');
    const star3 = document.getElementById('stars3');

    const lightMode = document.getElementById('jsi-snows');

    if(mode.classList.contains('dark')){
        darkMode.classList.add('dark-mode');
        star1.classList.add('star1');
        star2.classList.add('star2');
        star3.classList.add('star3');
        lightMode.classList.remove("g-snows");
    }else{
        lightMode.classList.add("g-snows");
        darkMode.classList.remove('dark-mode');
        star1.classList.remove('star1');
        star2.classList.remove('star2');
        star3.classList.remove('star3');
    }
}



function toDarkMode() {

}


function toLightMode() {
    
}




