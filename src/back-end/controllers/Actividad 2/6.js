// 6

function calcularDescuentoViaje(origen, destino, precio) {
    let descuento = 0;
  
    
    if (origen.toLowerCase() === "palma") {
      switch (destino.toLowerCase()) {
        case "la costa del sol":
          descuento = 0.05;
          break;
        case "panchimalco":
          descuento = 0.10;
          break;
        case "puerto el triunfo":
          descuento = 0.15;
          break;
        default:
          descuento = 0;
      }
    }
  
    const montoDescuento = precio * descuento;
    const precioFinal = precio - montoDescuento;
  
  
    alert(
      `Origen: ${origen}\nDestino: ${destino}\nDescuento: ${descuento * 100}%\n` +
      `Monto de descuento: $${montoDescuento.toFixed(2)}\n` +
      `Precio final: $${precioFinal.toFixed(2)}`
    );
  }
  
 
  const origen = prompt("Ingrese la ciudad de origen:");
  const destino = prompt("Ingrese la ciudad de destino:");
  const precio = parseFloat(prompt("Ingrese el precio del viaje:"));
  
  if (!isNaN(precio)) {
    calcularDescuentoViaje(origen, destino, precio);
  } else {
    alert("El precio ingresado no es válido.");
  }
  