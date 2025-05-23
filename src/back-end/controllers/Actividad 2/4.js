 // 4

 function obtenerNumeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  

  const numero1 = parseInt(prompt("Ingresa el primer número entero:"));
  const numero2 = parseInt(prompt("Ingresa el segundo número entero:"));
  
  const mayor = obtenerNumeroMayor(numero1, numero2);
  
  alert("El número mayor es: " + mayor);