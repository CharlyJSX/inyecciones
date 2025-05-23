// 1

function verificarEdad(edad) {
    const mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    return mensaje;
  }


  const edadUsuario = prompt("Ingresa tu edad:");
  alert(verificarEdad(parseInt(edadUsuario)));
