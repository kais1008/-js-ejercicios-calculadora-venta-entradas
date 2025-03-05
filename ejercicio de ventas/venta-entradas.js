document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let edadInput = document.getElementById('edad').value;
    let resultado = document.getElementById('resultado');
  
    if (edadInput.trim() === '') {
      resultado.textContent = 'Error: Por favor, ingresa tu edad.';
      return;
    }
  
    let edad = parseInt(edadInput, 10);
  
    if (isNaN(edad)) {
      resultado.textContent = 'Error: Ingresa un valor numérico válido.';
      return;
    }
  
    if (edad <= 0) {
      resultado.textContent = 'Error: Ingresa una edad válida (mayor a cero).';
      return;
    }
  
    const precioReducido = 10;   
    const precioCompleto  = 15;   
  
    if (edad < 12) {
      resultado.textContent = 'La entrada es gratuita.';
    } else if (edad >= 12 && edad <= 18) {
      resultado.textContent = `Tienes derecho a un precio reducido. Precio: ${precioReducido}€`;
    } else {
      resultado.textContent = `La entrada es a precio completo. Precio: ${precioCompleto}€`;
    }
  });
  