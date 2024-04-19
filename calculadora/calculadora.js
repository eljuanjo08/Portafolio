const suma = document.getElementById("sumar");
const resta = document.getElementById("restar");
const division = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");
const calcular = document.getElementById("calcular");
const borrar = document.getElementById("borrar");
const resultado = document.getElementById("resultado");

let a, b, operador;
let result = "";

borrar.addEventListener("click",()=>{
    resultado.value = "";
});

suma.addEventListener("click",()=>{
    operacion("+");
});

resta.addEventListener("click",()=>{
    operacion("-");
});

multiplicar.addEventListener("click",()=>{
    operacion("*");
});

division.addEventListener("click",()=>{
    operacion("/");
});

const numero = (num)=>{
    resultado.value += num;
}

const operacion = (op)=>{
    a = resultado.value;
    operador = op;
    resultado.value = "";
}

calcular.addEventListener("click",()=>{
    b = resultado.value;
    a = parseInt(a);
    b = parseInt(b);
    switch (operador) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    resultado.value = result;
})

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