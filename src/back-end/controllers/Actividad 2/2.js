  // 2

  function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
  
    
    console.log("Nombre del alumno: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota final: " + notaFinal.toFixed(2)); 
  }
  

  const nombre = prompt("Ingresa tu nombre:");
  const carnet = prompt("Ingresa tu carnet:");
  const examen = parseFloat(prompt("Ingresa tu nota del examen (0-100):"));
  const tareas = parseFloat(prompt("Ingresa tu nota de tareas (0-100):"));
  const asistencia = parseFloat(prompt("Ingresa tu nota de asistencia (0-100):"));
  const investigacion = parseFloat(prompt("Ingresa tu nota de investigación (0-100):"));
  
  calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);