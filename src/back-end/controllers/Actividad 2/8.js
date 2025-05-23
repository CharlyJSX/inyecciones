// 8

function mostrarTablaMultiplicar() {
    const numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar:"));
  
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    let resultado = `Tabla de multiplicar del ${numero}:\n`;
  
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
  
    alert(resultado);
  }
  


  mostrarTablaMultiplicar();
  