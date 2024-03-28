function openMenu() {
    let menu = document.getElementById("theMenu");
    menu.style.transform = "translateX(0px)";
    document.body.style.overflowY = 'hidden';
}

function closeMenu() {
    let menu = document.getElementById("theMenu");
    menu.style.transform = "translateX(730px)";
    document.html.style.overflowY = 'auto';
}