

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
    root.style.setProperty('--navbar-bg','#202230');
    root.style.setProperty('--navbar-shadow','rgb(99, 74, 116)');
    //home section
    root.style.setProperty('--intro-small','#bcc6bc');
    root.style.setProperty('--intro-big','#233232');
    root.style.setProperty('--intro-big-name','#59726e');
    root.style.setProperty('--intro-bigger-1','#43458f');
    root.style.setProperty('--intro-bigger-2','#3b3e91');
    root.style.setProperty('--intro-bigger-3','#2a2c64');
    root.style.setProperty('--social-button-bg','rgb(24, 24, 24)');
    root.style.setProperty('--social-button','rgb(116, 116, 116)');
    root.style.setProperty('--social-button-hover','rgb(163, 163, 163)');
    root.style.setProperty('--intro-button-bg','#7c7ca44c');
    root.style.setProperty('--intro-button-bg-hover','(24, 115, 28, 0.875)');
    root.style.setProperty('--intro-button-bg-hover-shadow','rgba(57, 58, 56, 0.814)');
    //about section
    root.style.setProperty('--about-card-bg','transparent');
    root.style.setProperty('--about-card-text','#d3d0cb');
    root.style.setProperty('--about-card-details-bg','rgb(26, 12, 41)');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#836ca2');
    root.style.setProperty('--about-card-skills-bg','rgba(51, 45, 94, 0.822)');
    root.style.setProperty('--about-card-skills-button-bg','inherit');
    //work section
    root.style.setProperty('--work-card-bg','rgba(50, 48, 53, 0.537)');
    root.style.setProperty('--work-title-color1','#e2dfeb');
    root.style.setProperty('--work-title-color2','#353535fe');
    root.style.setProperty('--proj-cont-bg','#222429c2');
    root.style.setProperty('--proj-cont-bg-hover','#222429');
    root.style.setProperty('--proj-cont-hover-shadow','rgba(184, 181, 181, 0.696)');
    root.style.setProperty('--proj-cont-inner','#0F131A');
    root.style.setProperty('--proj-title','#f0ead2');
    root.style.setProperty('--proj-title-line','#8d99ae');
    root.style.setProperty('--proj-stack','#f79d6579');
    root.style.setProperty('--proj-detail','#9db4c0');
    root.style.setProperty('--proj-btn','#56ab91');
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
    root.style.setProperty('--navbar-bg','#5561a5');
    root.style.setProperty('--navbar-shadow','rgb(100, 105, 255)');
    //home section
    root.style.setProperty('--intro-small','#fbf8cc79');
    root.style.setProperty('--intro-big','#a3c4f3');
    root.style.setProperty('--intro-big-name','#41B3A3');
    root.style.setProperty('--intro-bigger-1','#90dbf4');
    root.style.setProperty('--intro-bigger-2','#8eecf5');
    root.style.setProperty('--intro-bigger-3','#98f5e1');
    root.style.setProperty('--social-button-bg','#a6cbd3');
    root.style.setProperty('--social-button','#231942b7');
    root.style.setProperty('--social-button-hover','#231942');
    root.style.setProperty('--intro-button-bg','#0e00003b');
    root.style.setProperty('--intro-button-bg-hover','transparent');
    root.style.setProperty('--intro-button-bg-hover-shadow','#c0d8eb');
    //about section
    root.style.setProperty('--about-card-bg','transparent');
    root.style.setProperty('--about-card-text','black');
    root.style.setProperty('--about-card-details-bg','rgb(152, 246, 182)');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#27d430');
    root.style.setProperty('--about-card-skills-bg','rgba(171, 243, 242, 0.755)');
    root.style.setProperty('--about-card-skills-button-bg','inherit');
    //work section
    root.style.setProperty('--work-card-bg','#6f6fdd73');
    root.style.setProperty('--work-title-color1','#8fcaee');
    root.style.setProperty('--work-title-color2','#94f1c2');
    root.style.setProperty('--proj-cont-bg','#6f6fdde2');
    root.style.setProperty('--proj-cont-bg-hover','#6f6fdd');
    root.style.setProperty('--proj-cont-hover-shadow','rgba(33, 33, 33, 0.841)');
    root.style.setProperty('--proj-cont-inner','rgb(134, 134, 234)');
    root.style.setProperty('--proj-title','rgb(15, 29, 63)');
    root.style.setProperty('--proj-title-line','rgb(158, 237, 211)');
    root.style.setProperty('--proj-stack','rgba(79, 5, 101, 0.801)');
    root.style.setProperty('--proj-detail','#023047');
    root.style.setProperty('--proj-btn','rgba(73, 126, 186, 0.842)');
    //contact form
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




