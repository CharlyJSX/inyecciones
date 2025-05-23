// 9

function convertirTemperatura() {
    const celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));
  
    if (isNaN(celsius)) {
      alert("Por favor, introduce un valor numérico válido.");
      return;
    }
  
    
    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje = "";
  

    if (fahrenheit >= 14 && fahrenheit < 32) {
      mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
      mensaje = "Temperatura alta";
    } else {
      mensaje = "Temperatura desconocida";
    }
  
    alert(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F\n${mensaje}`);
  }
  
 
  convertirTemperatura();
  