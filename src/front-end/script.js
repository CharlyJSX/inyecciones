const container = document.getElementById("container");
const searchInput = document.getElementById("search");

let allCards = []; // Guardar todas las tarjetas con metadatos

async function fetchImages(count = 6) {
  const res = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
  const data = await res.json();
  return data;
}

function createCard(imageData) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.author = imageData.author.toLowerCase(); // Para buscar luego

  const img = document.createElement("img");
  img.src = `https://picsum.photos/id/${imageData.id}/300/200`;
  img.alt = imageData.author;

  const buttons = document.createElement("div");
  buttons.className = "card-buttons";

  const whatsapp = document.createElement("button");
  whatsapp.className = "whatsapp";
  whatsapp.textContent = "WhatsApp";
  whatsapp.onclick = () => {
    const message = `¡Mira esta imagen! ${img.src}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const update = document.createElement("button");
  update.className = "update";
  update.textContent = "Actualizar";
  update.onclick = async () => {
    const newImages = await fetchImages(1);
    img.src = `https://picsum.photos/id/${newImages[0].id}/300/200`;
    card.dataset.author = newImages[0].author.toLowerCase();
  };

  const del = document.createElement("button");
  del.className = "delete";
  del.textContent = "Eliminar";
  del.onclick = () => {
    card.remove();
    allCards = allCards.filter(c => c.element !== card);
  };

  buttons.append(whatsapp, update, del);
  card.append(img, buttons);
  container.appendChild(card);

  // Guardamos la tarjeta y su autor
  allCards.push({ element: card, author: imageData.author.toLowerCase() });
}

// Buscar tarjetas por autor
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  allCards.forEach(({ element, author }) => {
    element.style.display = author.includes(query) ? "block" : "none";
  });
});

async function init() {
  const images = await fetchImages();
  images.forEach(createCard);
}

init();
