
// MAP CODE
window.onload = function() {
    var map = L.map('map');

    // solicitar permissão para acessar a localização do usuário
    map.locate({ setView: true, maxZoom: 16});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap'
    }).addTo(map)

    // marcador para a localização do usuário
    function onLocationFound(e) {
        // var radius = e.accuracy / 2;

        L.marker(e.latlng, {
            icon: greenIcon
        }).addTo(map)
            .bindPopup("Você está aqui.").openPopup();
    }

    map.on('locationfound', onLocationFound);

    // pin green
    var greenIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',

        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // carregar pontos de interesse do JSON externo
    fetch('myplaces.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function (point) {
                L.marker([point.latitude, point.longitude]).addTo(map)
                    .bindPopup(point.name);
            });
        })
        .catch(error => console.error('Erro ao caregar os pontos de interesse: ', error));
}
