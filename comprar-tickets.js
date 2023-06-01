// variables globales

let formulario = document.querySelector(".form"),
cantidad = document.querySelector("#cantidad"),
categoria = document.querySelector("#categoria"),
total = document.querySelector(".total"),
borrar = document.querySelector(".borrar"),
resumen = document.querySelector(".resumen");


resumen.addEventListener("click", (e) => {

    total.value = "Total a pagar: $";

    e.preventDefault();

    let valorCategoria = 0;

    if (categoria.value == "estudiante") {
        valorCategoria = (cantidad.value * 200 ) * 80 / 100;
    } else if (categoria.value == "trainee"){
        valorCategoria = (cantidad.value * 200 ) * 50 / 100;
    } else if (categoria.value == "junior"){
        valorCategoria = (cantidad.value * 200 ) * 15 / 100;
    }

    total.value += ` ${valorCategoria}`;
});

borrar.addEventListener("click" , (e) => {
    e.preventDefault();
    formulario.reset();
});