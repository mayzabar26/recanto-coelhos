//MAPA DA POUSADA
const latitude = -2.515205;
const longitude = -43.262847;

//MAPA OPENSTREETMAP
const map = L.map('map').setView([latitude, longitude], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//MARCADOR
const marker = L.marker([latitude, longitude]).addTo(map);

//INFORMAÇÃO DO MARCADOR
marker.bindPopup("<b>Pousada Recanto Coelhos</b><br>Santo Amaro, Maranhão").openPopup();