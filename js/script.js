/*              |
                |       make main div height of viewport
               \/
*/
const mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight)+"px";

function setScrollBar(thumb, track){
    console.log(thumb, track);
};



function scrollMain() {
    window.scroll({
        top: 94,
        behavior: 'smooth'
    });
};

function scrollAbout() {
    window.scroll({
        top: window.innerHeight + 94,
        behavior: 'smooth'
    });
};