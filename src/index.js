const superMarkers = require("./markers");
const 



const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markers = superMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
markers.addTo(map);

console.log("Hey, whats up!")