let ham = document.getElementById("ham");
let options = document.getElementById("menu");
opened = false;

const openMenu = () => {
    options.style.left = "80%";

};

const closeMenu = () => {
    options.style.left = "-100%";

};