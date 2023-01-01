

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
        toDarkMode();
    }else{
        lightMode.classList.add("g-snows");
        darkMode.classList.remove('dark-mode');
        star1.classList.remove('star1');
        star2.classList.remove('star2');
        star3.classList.remove('star3');
        toLightMode();
    }
}



function toDarkMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--navbar-bg','#3C415C');
    root.style.setProperty('--navbar-shadow','rgb(158, 92, 205)');
    root.style.setProperty('--intro-small','green');
    root.style.setProperty('--intro-big','#96FFFF');
    root.style.setProperty('--intro-big-name','#41B3A3');
    root.style.setProperty('--intro-bigger-1','rgba(182, 239, 182, 0.868)');
    root.style.setProperty('--intro-bigger-2','rgb(166, 234, 228)');
    root.style.setProperty('--intro-bigger-3','rgb(142, 194, 218)');
    root.style.setProperty('--social-button-bg','rgb(14, 201, 179)');
    root.style.setProperty('--social-button','rgb(84, 34, 84)');
    root.style.setProperty('--social-button-hover','rgb(104, 70, 131)');
    root.style.setProperty('--intro-button-bg','rgba(91, 213, 140, 0.636)');
    root.style.setProperty('--intro-button-bg-hover','rgba(35, 235, 45, 0.875)');
    root.style.setProperty('--intro-button-bg-hover-shadow','rgba(133, 240, 11, 0.814)');
    root.style.setProperty('--about-card-bg','aqua');
    root.style.setProperty('--about-card-text','black');
    root.style.setProperty('--about-card-details-bg','rgb(152, 246, 182)');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#2EE59D');
    root.style.setProperty('--about-card-skills-bg','rgb(171, 243, 242)');
    root.style.setProperty('--about-card-skills-button-bg','inherit');
    root.style.setProperty('--work-card-bg','rgba(50, 48, 53, 0.537)');
    root.style.setProperty('--work-title-colors','#e2dfeb, #031425fe, #ece4f4, #010807');
    root.style.setProperty('--proj-cont-bg','transparent');
    root.style.setProperty('--proj-cont-bg-hover','transparent');
    root.style.setProperty('--proj-cont-inner','transparent');
    root.style.setProperty('--proj-title-line','aquamarine');
    root.style.setProperty('--proj-stack','rgb(85, 79, 79)');
    root.style.setProperty('--proj-detail','rgb(28, 60, 105)');
    root.style.setProperty('--proj-btn','aqua');
    root.style.setProperty('--contact-card bg','transparent');
    root.style.setProperty('--contact-form-bg','#15172b');
    root.style.setProperty('--contact-form-title','#eee');
    root.style.setProperty('--contact-form-input-bg','#303245');
    root.style.setProperty('--contact-form-input-text','#eee');
    root.style.setProperty('--contact-form-input-placeholder','#65657b');
    root.style.setProperty('--contact-form-input-placeholder-focus','#dc2f55');
    root.style.setProperty('--contact-form-submit-bg','#08d');
    root.style.setProperty('--contact-form-submit-text','#eee');
    root.style.setProperty('--contact-form-submit-active-bg','rgb(3, 14, 68)');
}


function toLightMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--navbar-bg','#3C415C');
    root.style.setProperty('--navbar-shadow','rgb(158, 92, 205)');
    root.style.setProperty('--intro-small','green');
    root.style.setProperty('--intro-big','#96FFFF');
    root.style.setProperty('--intro-big-name','#41B3A3');
    root.style.setProperty('--intro-bigger-1','rgba(182, 239, 182, 0.868)');
    root.style.setProperty('--intro-bigger-2','rgb(166, 234, 228)');
    root.style.setProperty('--intro-bigger-3','rgb(142, 194, 218)');
    root.style.setProperty('--social-button-bg','rgb(14, 201, 179)');
    root.style.setProperty('--social-button','rgb(84, 34, 84)');
    root.style.setProperty('--social-button-hover','rgb(104, 70, 131)');
    root.style.setProperty('--intro-button-bg','rgba(91, 213, 140, 0.636)');
    root.style.setProperty('--intro-button-bg-hover','rgba(35, 235, 45, 0.875)');
    root.style.setProperty('--intro-button-bg-hover-shadow','rgba(133, 240, 11, 0.814)');
    root.style.setProperty('--about-card-bg','aqua');
    root.style.setProperty('--about-card-text','black');
    root.style.setProperty('--about-card-details-bg','rgb(152, 246, 182)');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#2EE59D');
    root.style.setProperty('--about-card-skills-bg','rgb(171, 243, 242)');
    root.style.setProperty('--about-card-skills-button-bg','inherit');
    root.style.setProperty('--work-card-bg','rgba(50, 48, 53, 0.537)');
    root.style.setProperty('--work-title-color1','#e2dfeb');
    root.style.setProperty('--work-title-color2','#031425fe');
    root.style.setProperty('--proj-cont-bg','transparent');
    root.style.setProperty('--proj-cont-bg-hover','transparent');
    root.style.setProperty('--proj-cont-inner','transparent');
    root.style.setProperty('--proj-title','aquamarine');
    root.style.setProperty('--proj-title-line','aquamarine');
    root.style.setProperty('--proj-stack','rgb(85, 79, 79)');
    root.style.setProperty('--proj-detail','rgb(28, 60, 105)');
    root.style.setProperty('--proj-btn','aqua');
    root.style.setProperty('--contact-card bg','transparent');
    root.style.setProperty('--contact-form-bg','#15172b');
    root.style.setProperty('--contact-form-title','#eee');
    root.style.setProperty('--contact-form-input-bg','#303245');
    root.style.setProperty('--contact-form-input-text','#eee');
    root.style.setProperty('--contact-form-input-placeholder','#65657b');
    root.style.setProperty('--contact-form-input-placeholder-focus','#dc2f55');
    root.style.setProperty('--contact-form-submit-bg','#08d');
    root.style.setProperty('--contact-form-submit-text','#eee');
    root.style.setProperty('--contact-form-submit-active-bg','rgb(3, 14, 68)');
}




