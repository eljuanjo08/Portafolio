const cambiar = document.getElementById("bMore");
const enlaces = document.getElementById("links");
let activo = false;

cambiar.addEventListener("click", () => {
    enlaces.classList.toggle("collapsed");
});


cambiar.addEventListener('click', function() {
  this.classList.toggle('collapsed');
});