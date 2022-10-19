
const home = document.getElementById('Home');
const about = document.getElementById('About');
const work = document.getElementById('Work');
const contact = document.getElementById('Contact');




function contactClick(){
    home.style =  "z-index: -1"
    about.style =  "z-index: -1"
    work.style =  "z-index: -1"
    contact.style = "z-index: 10"
}

function homeClick(){
    home.style =  "z-index: 10"
    about.style =  "z-index: -1"
    work.style =  "z-index: -1"
    contact.style =  "z-index: -1"

}

function aboutClick(){
    home.style =  "z-index: -1"
    about.style =  "z-index: 10"
    work.style =  "z-index: -1"
    contact.style =  "z-index: -1"
}

function workClick(){
    home.style =  "z-index: -1"
    about.style =  "z-index: -1"
    work.style =  "z-index: 10"
    contact.style =  "z-index: -1"
}




