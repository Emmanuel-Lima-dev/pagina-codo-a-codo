let cards = document.querySelectorAll(".card");
let lengthCards = cards.length;

let fadeIzquierdo = document.querySelectorAll(".fade-izquierdo");
let lengthFadeIzquierdo = fadeIzquierdo.length;

let fadeDerecho = document.querySelectorAll(".fade-derecho");
let lengthFadeDerecho = fadeDerecho.length;

window.document.addEventListener( "scroll", () => {
    let altura = window.innerHeight;
    for ( let i = 0; i < lengthCards ; i++ ){
        cards[i].classList.add("opaciti-0");
        let distancia = cards[i].getBoundingClientRect().top;
        

        if ( distancia + 80 < altura ){
            cards[i].classList.remove("opaciti-0");
            cards[i].classList.add("animate__animated");
            cards[i].classList.add("animate__fadeInUp");
        }
    }

    for ( let i = 0; i < lengthFadeIzquierdo ; i++ ){
        fadeIzquierdo[i].classList.add("opaciti-0");
        let distancia = fadeIzquierdo[i].getBoundingClientRect().top;
        

        if ( distancia + 80 < altura ){
           fadeIzquierdo[i].classList.remove("opaciti-0");
           fadeIzquierdo[i].classList.add("animate__animated");
           fadeIzquierdo[i].classList.add("animate__fadeInLeft");
        }
    }

    for ( let i = 0; i < lengthFadeDerecho ; i++ ){
        fadeDerecho[i].classList.add("opaciti-0");
        let distancia = fadeDerecho[i].getBoundingClientRect().top;
        

        if ( distancia + 80 < altura ){
           fadeDerecho[i].classList.remove("opaciti-0");
           fadeDerecho[i].classList.add("animate__animated");
           fadeDerecho[i].classList.add("animate__fadeInRight");
        }
    }

} );