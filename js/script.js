/*              |
                |       make main div height of viewport
               \/
*/
const mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight)+"px";


function changeTheme(targetTheme){
    document.querySelector("link[href='u1.css']").href = "targetTheme" + ".css";
}

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