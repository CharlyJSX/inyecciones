// 7

function analizarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;
  
    for (let i = 1; i <= 10; i++) {
      let valor = parseInt(prompt(`Ingresa el valor entero #${i}:`));
  
      if (isNaN(valor)) {
        alert("Por favor ingresa un número válido.");
        i--; 
        continue;
      }
  
      if (valor < 0) {
        negativos++;
      } else if (valor > 0) {
        positivos++;
      }
  
      if (valor % 15 === 0) {
        multiplosDe15++;
      }
  
      if (valor % 2 === 0) {
        sumaPares += valor;
      }
    }
  
    alert(
      `Resultados:\n` +
      `Cantidad de valores negativos: ${negativos}\n` +
      `Cantidad de valores positivos: ${positivos}\n` +
      `Cantidad de múltiplos de 15: ${multiplosDe15}\n` +
      `Suma de números pares: ${sumaPares}`
    );
  }

  analizarNumeros();
  