const width = 4000;
const height = 3000;

const bounds = [
    [0, 0],
    [height, width]
];

const map = L.map('frostlands', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 4,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

var c = new L.Control.Coordinates();

c.addTo(map);

map.on('click', function(e) {
	c.setCoordinates(e);
});

L.imageOverlay('../assets/26-05-29.svg', bounds).addTo(map);

map.fitBounds(bounds);