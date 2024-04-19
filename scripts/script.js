const cambiar = document.getElementById("bMore");
const enlaces = document.getElementById("links");
const menu = document.querySelector(".menu-icon");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

let activo = false;

cambiar.addEventListener("click", () => {
    enlaces.classList.toggle("collapsed");
});


cambiar.addEventListener('click', function() {
  this.classList.toggle('collapsed');
});

menu.addEventListener("click",()=>{
    line1.classList.remove("no-animation");
    line2.classList.remove("no-animation");
    line3.classList.remove("no-animation");
    if (activo === false) {
        menu.classList.add("active");
        return activo = true;
    } else {
    menu.classList.remove("active");
    return activo = false;
    }
})