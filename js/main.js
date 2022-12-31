let botonPista = document.getElementById('boton-pista');
let divPista = document.getElementById('divPista')
botonPista.addEventListener('click', mostrarPista);

function mostrarPista() {
    divPista.innerHTML = 
    `
    <div class="card text-bg-info mb-3 pista" style="max-width: 18rem;">
    <div class="card-header">PISTA:</div>
    <div class="card-body">
      <h5 class="card-title">¿De verdad necesitás una pista?</h5>
      <p class="card-text">Esto podría ser un trabajo práctico...</p>
      <p class="card-text">Ya está, arriesgá...</p>
    </div>
  </div>
    `
    
    
}






