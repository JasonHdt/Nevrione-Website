function initMap() {

    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const title = document.getElementById("title");
    const closeBtn = document.getElementById("close-sidebar");

    closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    closeBtn.classList.remove("open");
});

    function openLocation(html, name = "") {
        content.innerHTML = html;
        title.textContent = name;
        sidebar.classList.add("open");
        closeBtn.classList.add("open")
    }

    const width = 4000;
    const height = 3000;

    const bounds = [
        [0, 0],
        [height, width]
    ];

    const map = L.map("frostlands", {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 4,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0
    });

    map.fitBounds(bounds);
// ======================
// Coordonnées au clic
// ======================
/*
map.on('click', function(e) {

    const x = Math.round(e.latlng.lng);
    const y = Math.round(e.latlng.lat);

    console.log(`x: ${x}, y: ${y}`);

});
*/

// ======================
// Marqueurs
// ======================

const size = 100

// ICON TYPE
const NORNFANG = L.icon({
    iconUrl: '../assets/STAMP_nornfang.webp',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [-3, -76],
});

const CAVE = L.icon({
    iconUrl: '../assets/STAMP_cave.webp',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [-3, -76]
});

const RUIN = L.icon({
    iconUrl: '../assets/STAMP_ruin.webp',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [-3, -76]
});
// .................

map.createPane('roads');
map.getPane('roads').style.zIndex = 200;

map.createPane('nodes');
map.getPane('nodes').style.zIndex = 400;



// 29-05-26

// NODES

const node0 = L.marker([300, 1000], {icon: NORNFANG}).addTo(map);
const node1 = L.marker([600, 1000], {icon: CAVE}).addTo(map);

// Lignes

L.polyline([
    [300, 1000],
    [600, 1000]
], {
    road: '0 -> 1',
    pane: 'roads',
    color: 'black',
    dashArray: '10, 10',
    weight: 10
}).addTo(map);


// CLIC SUR LES NODES

node0.on("click", () => {
    fetch("../assets/data/lieux/ambrore.html")
        .then(r => r.text())
        .then(html => openLocation(html));
});

node1.on("click", () => {
    fetch("../assets/data/lieux/cave1.html")
        .then(r => r.text())
        .then(html => openLocation(html));
});

/*
// Next Session
const node2 = L.marker([900, 700], {icon: RUIN}).addTo(map);
L.polyline([
    [600, 1000],
    [900, 700]
], {
    road: '0 -> 1',
    pane: 'roads',
    color: 'yellow',
    weight: 10
}).addTo(map);
*/


}