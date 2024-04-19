const menu = document.querySelector(".menu-icon");

const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
let activo = true;

menu.addEventListener("click",()=>{
    line1.classList.remove("no-animation");
    line2.classList.remove("no-animation");
    line3.classList.remove("no-animation");
    if (activo) {
        menu.classList.add("active");
        return activo = false;
    } else {
    menu.classList.remove("active");
    return activo = true;
    }
})