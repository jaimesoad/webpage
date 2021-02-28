let ham = document.getElementById("ham");
let options = document.getElementById("menu");
opened = false;

const menu = () => {
    if(opened){
        options.style.left = "-100%";
        ham.style.transform = "rotate(0deg)";
        opened = false;

    }else {
        options.style.left = "80%";
        ham.style.transform = "rotate(90deg)";
        opened = true;

    }

};