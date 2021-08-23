function deploy() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("event-deploy-menu");
}

let buttonMenu = document.querySelector("#deploy-menu");
if (buttonMenu) {
    buttonMenu.addEventListener("click", deploy);
}

function toggleEvent() {
    let menu = document.querySelector("#menu");
    if (screen.width > 780) {
        menu.classList.remove("event-deploy-menu");
    }
}

window.onresize = repor;

let bodyDocument = document.querySelector("body");
if (bodyDocument) {
    bodyDocument.addEventListener("resize", toggleEvent);
}
