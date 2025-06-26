// Obtener imagen dinámica de RandomUser API
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        document.getElementById('profileImage').src = user.picture.large;
        document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
      });

    // Función ejemplo para botón de WhatsApp
    function enviarWhatsApp() {
      const phoneNumber = '5491123456789'; // Reemplazar por tu número
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }