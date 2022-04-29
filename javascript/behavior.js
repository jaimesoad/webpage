let ham = document.getElementById("ham");
let options = document.getElementById("menu");

const openMenu = () => {
    options.style.transform = "translateX(0)";

};

const closeMenu = () => {
    options.style.transform = "translateX(-100%)";

};