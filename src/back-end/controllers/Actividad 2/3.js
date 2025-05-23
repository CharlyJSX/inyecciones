  // 3

  function calcularAumento(nombre1, salario, categoria) {
    let porcentajeAumento;
  

    switch (categoria.toUpperCase()) {
      case "A":
        porcentajeAumento = 0.15;
        break;
      case "B":
        porcentajeAumento = 0.30;
        break;
      case "C":
        porcentajeAumento = 0.10;
        break;
      case "D":
        porcentajeAumento = 0.20;
        break;
      default:
        console.log("Categoría inválida.");
        return;
    }
  
    
    const aumento = salario * porcentajeAumento;
    const nuevoSalario = salario + aumento;
  
  
    console.log("Nombre del empleado: " + nombre1);
    console.log("Categoría: " + categoria.toUpperCase());
    console.log("Salario actual: $" + salario.toFixed(2));
    console.log("Aumento: $" + aumento.toFixed(2));
    console.log("Nuevo salario: $" + nuevoSalario.toFixed(2));
  }

  const nombre1 = prompt("Ingrese el nombre del empleado:");
  const salario = parseFloat(prompt("Ingrese el salario del empleado:"));
  const categoria = prompt("Ingrese la categoría del empleado (A, B, C, D):");
  
  calcularAumento(nombre, salario, categoria);