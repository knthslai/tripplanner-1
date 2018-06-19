const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F0b25pdmFuIiwiYSI6ImNqaW01ZTk4bDAwamMzcG51eGV2d2ZvM3QifQ.1qY8wwVdke0D3mNraa3l7g";

const activityMarker = document.createElement("div");
activityMarker.style.width = "32px";
activityMarker.style.height = "39px";
activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const hotelMarker = document.createElement("div");
hotelMarker.style.width = "32px";
hotelMarker.style.height = "39px";
hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

const restaurantMarker = document.createElement("div");
restaurantMarker.style.width = "32px";
restaurantMarker.style.height = "39px";
restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

new mapboxgl.Marker(activityMarker).setLngLat([-74.009, 40.705]).addTo(map);

module.exports = {
    activityMarker, hotelMarker, restaurantMarker
}