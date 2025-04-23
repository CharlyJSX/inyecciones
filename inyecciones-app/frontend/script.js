const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const duracion = document.getElementById('duracion').value;

  const res = await fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre,
      fechaInyeccion: fecha,
      duracionMeses: parseInt(duracion)
    })
  });

  const usuaria = await res.json();
  agregarAlListado(usuaria);
});

function agregarAlListado(u) {
  const li = document.createElement('li');
  li.textContent = `${u.nombre} | ${new Date(u.fecha_inyeccion).toLocaleDateString()} | ${u.duracion_meses} meses`;
  lista.appendChild(li);
}

async function cargarUsuarias() {
  const res = await fetch('http://localhost:3000/usuarios');
  const data = await res.json();
  data.forEach(agregarAlListado);
}

cargarUsuarias();
