navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
  
    const map = L.map('map').setView([lat, lon], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);
    L.marker([lat, lon]).addTo(map).bindPopup("Jesteś tutaj").openPopup();
  });
  