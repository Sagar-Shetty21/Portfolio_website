

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

    if(mode.classList.contains('dark')){
        toDarkMode();
    }else{
        toLightMode();
    }
}



function toDarkMode() {
    var root = document.querySelector(':root');
    

    root.style.setProperty('--navbar-bg','#202230');
    root.style.setProperty('--navbar-shadow','rgb(99, 74, 116)');

    root.style.setProperty('--toggle-bg','#000000');
    root.style.setProperty('--toggle-ball-bg','rgb(15, 17, 16)');
    root.style.setProperty('--toggle-shadow','0 0 20px rgba(255, 255, 255, 0.897)');

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




    root.style.setProperty('--backgroundColor','radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)');
    root.style.setProperty('--bg-stars-color','#FFF');
    root.style.setProperty('--toggle-bg','#82cac3');
    root.style.setProperty('--toggle-ball-bg','rgb(117, 214, 177)');
    root.style.setProperty('--toggle-shadow','0 0 20px rgba(26, 25, 25, 0.781)');
    
    root.style.setProperty('--navbar-bg','#000000a4');
    root.style.setProperty('--navbar-shadow','#FF6701');
    root.style.setProperty('--navbar-text-color','white');
    root.style.setProperty('--navitem-hover','#FF6701');
    root.style.setProperty('--navitem-line','#009378');
    //home section
    root.style.setProperty('--intro-small','#c2c2c2');
    root.style.setProperty('--intro-big','#FFFFFF');
    root.style.setProperty('--intro-big-name','#FF6701');
    root.style.setProperty('--intro-bigger-1','#FFFFFF');
    root.style.setProperty('--intro-bigger-2','#FFFFFF');
    root.style.setProperty('--intro-bigger-3','#FFFFFF');
    root.style.setProperty('--social-button-bg','#C53678');
    root.style.setProperty('--social-button','#ffffffb7');
    root.style.setProperty('--social-button-hover','#ffffff');
    root.style.setProperty('--intro-button-bg','#FF6701');
    root.style.setProperty('--intro-button-bg-hover','#FEA82F');
    root.style.setProperty('--intro-button-bg-hover-shadow','#FF6701');
    //about section
    root.style.setProperty('--about-card-bg','transparent');
    root.style.setProperty('--about-card-text','black');
    root.style.setProperty('--about-heading-color','#FF6701');
    root.style.setProperty('--about-card-details-bg','#1EE494');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#FF6701');
    root.style.setProperty('--about-card-skills-border','#1EE494');
    root.style.setProperty('--about-card-skills-button-bg','#1EE494');
    //work section
    root.style.setProperty('--work-card-bg','transparent');
    root.style.setProperty('--work-title-color1','#FF6701');
    root.style.setProperty('--work-title-shadow','1px 0px 4px #FF6701, 2px 0px 4px #f07a2c, 3px 0px 4px #FF6701, 2px 0px 3px #FF6701, 2px 3px 15px #c56e34, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #fc8739,40px 0vw 200px #cc8353');
    root.style.setProperty('--proj-cont-bg','#f6f6f6a6');
    root.style.setProperty('--proj-cont-bg-hover','#F6F6F6');
    root.style.setProperty('--proj-cont-hover-shadow','rgba(33, 33, 33, 0.841)');
    root.style.setProperty('--work-card-border-color','#444444');
    root.style.setProperty('--proj-cont-inner','inherit');
    root.style.setProperty('--proj-title','#009378');
    root.style.setProperty('--proj-title-line','#FF6701');
    root.style.setProperty('--proj-stack','#C53678');
    root.style.setProperty('--proj-detail','#023047');
    root.style.setProperty('--proj-btn','#ff6701cb');
    //contact form
    root.style.setProperty('--contact-card bg','transparent');
    root.style.setProperty('--contact-form-bg','#57a597');
    root.style.setProperty('--contact-form-title','#eeeeee');
    root.style.setProperty('--contact-form-input-bg','#f6f6f6f1');
    root.style.setProperty('--contact-form-input-text','#000000');
    root.style.setProperty('--contact-form-input-placeholder','#65657b');
    root.style.setProperty('--contact-form-input-placeholder-focus','#FF6701');
    root.style.setProperty('--contact-form-submit-bg','#FF6701');
    root.style.setProperty('--contact-form-submit-text','#ffffff');
    root.style.setProperty('--contact-form-submit-active-bg','rgb(255, 72, 0)');
}


function toLightMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--backgroundColor','radial-gradient(circle, #F6F6F6 0%, #F6F6F6 56%, #F6F6F6 100%)');
    root.style.setProperty('--bg-stars-color','black');
    root.style.setProperty('--toggle-bg','#82cac3');
    root.style.setProperty('--toggle-ball-bg','rgb(117, 214, 177)');
    root.style.setProperty('--toggle-shadow','0 0 20px rgba(26, 25, 25, 0.781)');
    
    root.style.setProperty('--navbar-bg','#F6F6F6');
    root.style.setProperty('--navbar-shadow','#FF6701');
    root.style.setProperty('--navbar-text-color','black');
    root.style.setProperty('--navitem-hover','#FF6701');
    root.style.setProperty('--navitem-line','#009378');
    //home section
    root.style.setProperty('--intro-small','#222222d2');
    root.style.setProperty('--intro-big','#222222');
    root.style.setProperty('--intro-big-name','#FF6701');
    root.style.setProperty('--intro-bigger-1','#222222');
    root.style.setProperty('--intro-bigger-2','#222222');
    root.style.setProperty('--intro-bigger-3','#222222');
    root.style.setProperty('--social-button-bg','#C53678');
    root.style.setProperty('--social-button','#ffffffb7');
    root.style.setProperty('--social-button-hover','#ffffff');
    root.style.setProperty('--intro-button-bg','#FF6701');
    root.style.setProperty('--intro-button-bg-hover','#FEA82F');
    root.style.setProperty('--intro-button-bg-hover-shadow','#FF6701');
    //about section
    root.style.setProperty('--about-card-bg','transparent');
    root.style.setProperty('--about-card-text','black');
    root.style.setProperty('--about-heading-color','#FF6701');
    root.style.setProperty('--about-card-details-bg','#1EE494');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#FF6701');
    root.style.setProperty('--about-card-skills-border','#1EE494');
    root.style.setProperty('--about-card-skills-button-bg','#1EE494');
    //work section
    root.style.setProperty('--work-card-bg','transparent');
    root.style.setProperty('--work-title-color1','#FF6701');
    root.style.setProperty('--work-title-shadow','1px 0px 4px #FF6701, 2px 0px 4px #f07a2c, 3px 0px 4px #FF6701, 2px 0px 3px #FF6701, 2px 3px 15px #c56e34, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #fc8739,40px 0vw 200px #cc8353');
    root.style.setProperty('--proj-cont-bg','#f6f6f6a6');
    root.style.setProperty('--proj-cont-bg-hover','#F6F6F6');
    root.style.setProperty('--proj-cont-hover-shadow','rgba(33, 33, 33, 0.841)');
    root.style.setProperty('--work-card-border-color','#444444');
    root.style.setProperty('--proj-cont-inner','inherit');
    root.style.setProperty('--proj-title','#009378');
    root.style.setProperty('--proj-title-line','#FF6701');
    root.style.setProperty('--proj-stack','#C53678');
    root.style.setProperty('--proj-detail','#023047');
    root.style.setProperty('--proj-btn','#ff6701cb');
    //contact form
    root.style.setProperty('--contact-card bg','transparent');
    root.style.setProperty('--contact-form-bg','#57a597');
    root.style.setProperty('--contact-form-title','#eeeeee');
    root.style.setProperty('--contact-form-input-bg','#f6f6f6f1');
    root.style.setProperty('--contact-form-input-text','#000000');
    root.style.setProperty('--contact-form-input-placeholder','#65657b');
    root.style.setProperty('--contact-form-input-placeholder-focus','#FF6701');
    root.style.setProperty('--contact-form-submit-bg','#FF6701');
    root.style.setProperty('--contact-form-submit-text','#ffffff');
    root.style.setProperty('--contact-form-submit-active-bg','rgb(255, 72, 0)');
}




