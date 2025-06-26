import { enviarWhatsApp } from "../back-end/controllers/inyecciones.controller";


async function cargarPokemonAleatorio() {
    const id = Math.floor(Math.random() * 151) + 1; // Pokémon del 1 al 151
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();

      document.getElementById('pokeName').textContent = data.name;
      document.getElementById('pokeImage').src = data.sprites.other['official-artwork'].front_default;
    } catch (error) {
      console.error("Error al cargar Pokémon:", error);
     // document.getElementById('pokeName').textContent = "Error al cargar";
    }
  }


  function enviarWhatsApp() {
    const nombre = document.getElementById('pokeName').textContent;
    const mensaje = encodeURIComponent(`La fecha de tu próxima inyección es ${nombre}`);
    const url = `https://wa.me/?text=${mensaje}`;
    window.open(url, '_blank');
  }

  // Cargar Pokémon al iniciar
  cargarPokemonAleatorio();
