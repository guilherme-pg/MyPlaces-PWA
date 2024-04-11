
// add DATA from the FORM to the JSON file
document.addEventListener("DOMContentLoaded", function() {
    load_places();
})

function load_places() {
    fetch("../myplaces.json")
        .then(response => response.json())
        .then(data => {
            const list_places = document.getElementById("list_places")
            list_places.innerHTML = ""; // limpa a lista

            data.forEach(item => {
                const li = document.createElement("li");
                const geolink = `<a href="geo:${item.latitude}, ${item.longitude}">Check in the Map</a>`;
                li.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Tipo: ${item.type}</p>
                    <p>Bairro: ${item.bairro}</p>
                    <p>Open Space: ${item.open_space}</p>
                    <p>Description: ${item.description}</p>
                    <p>${geolink}</p>
                    `;
                list_places.appendChild(li);
            })
        })
        .catch(error => console.error("Erro ao carregar lista: ", error));
}


