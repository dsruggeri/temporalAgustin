function mostrarPista() {
    cardPista.classList.remove("oculto");    
}

let cardPista = document.getElementById('pista')
let botonPista = document.getElementById('boton-pista');

botonPista.addEventListener('click', mostrarPista());


