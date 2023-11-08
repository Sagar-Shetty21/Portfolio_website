

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


    root.style.setProperty('--backgroundColor','radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)');
    root.style.setProperty('--bg-stars-color','#FFF');
    root.style.setProperty('--toggle-bg','#294946');
    root.style.setProperty('--toggle-ball-bg','rgb(44, 97, 77)');
    root.style.setProperty('--toggle-shadow','0 0 20px rgba(233, 231, 231, 0.849)');
    
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
    root.style.setProperty('--about-card-text','white');
    root.style.setProperty('--about-heading-color','#FF6701');
    root.style.setProperty('--about-card-details-bg','#0b5034');
    root.style.setProperty('--about-card-details-button-bg','inherit');
    root.style.setProperty('--about-card-details-button-bg-hover','#FF6701');
    root.style.setProperty('--about-card-skills-border','#0b5034');
    root.style.setProperty('--about-card-skills-button-bg','#0b5034');
    //work section
    root.style.setProperty('--work-card-bg','transparent');
    root.style.setProperty('--work-title-color1','#FF6701');
    root.style.setProperty('--work-title-shadow','1px 0px 4px #FF6701, 2px 0px 4px #f07a2c, 3px 0px 4px #FF6701, 2px 0px 3px #FF6701, 2px 3px 15px #c56e34, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #fc8739,40px 0vw 200px #cc8353');
    root.style.setProperty('--proj-cont-bg','#0a0a0aa6');
    root.style.setProperty('--proj-cont-bg-hover','#0a0a0a');
    root.style.setProperty('--proj-cont-hover-shadow','rgba(226, 226, 226, 0.841)');
    root.style.setProperty('--work-card-border-color','#c4c4c4');
    root.style.setProperty('--proj-cont-inner','inherit');
    root.style.setProperty('--proj-title','#009378');
    root.style.setProperty('--proj-title-line','#FF6701');
    root.style.setProperty('--proj-stack','#C53678');
    root.style.setProperty('--proj-detail','#caecfd');
    root.style.setProperty('--proj-btn','#ff6701cb');
    //contact form
    root.style.setProperty('--contact-card bg','transparent');
    root.style.setProperty('--contact-form-bg','#15172b');
    root.style.setProperty('--contact-form-title','#eee');
    root.style.setProperty('--contact-form-input-bg','#303245');
    root.style.setProperty('--contact-form-input-text','#eee');
    root.style.setProperty('--contact-form-input-placeholder','#65657b');
    root.style.setProperty('--contact-form-input-placeholder-focus','#dc2f55');
    root.style.setProperty('--contact-form-submit-bg','#FF6701');
    root.style.setProperty('--contact-form-submit-text','#eee');
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




