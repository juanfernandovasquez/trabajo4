/*Menú de hamburguesa */
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

$(".hamburger").on("click", function () {
  $(".navegation").slideToggle();
});

var mymap = L.map("mapid").setView([-12.068568, -77.078828], 15);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVhbmZ2diIsImEiOiJja21jeHMxaWIwZXlxMm5wNzlpOHVocHJkIn0.DymDEb_TZQeO12t_djtwHg",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(mymap);
var marker = L.marker([-12.068568, -77.078828]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
