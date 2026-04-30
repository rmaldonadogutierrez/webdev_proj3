// dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// random compliment
function giveCompliment() {
  const msgs = [
    "you’re killing it",
    "you’re smarter than you think",
    "this project is lucky to have you",
    "you’re unstoppable",
    "you’re actually built for this"
  ];

  const pick = Math.floor(Math.random() * msgs.length);
  alert(msgs[pick]);
}

// google map
function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };
  const pokePoke = { lat: 41.8835, lng: -87.6260 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: chicago,
    mapTypeId: "hybrid"
  });

  // Chicago marker
  const chicagoMarker = new google.maps.Marker({
    position: chicago,
    map: map,
    title: "Chicago"
  });

  const chicagoInfo = new google.maps.InfoWindow({
    content: "<p>Chicago :)</p>"
  });

  chicagoMarker.addListener("click", () => {
    chicagoInfo.open(map, chicagoMarker);
  });

  // Poke Poke marker
  const pokeMarker = new google.maps.Marker({
    position: pokePoke,
    map: map,
    title: "Poke Poke (Wabash)"
  });

  const pokeInfo = new google.maps.InfoWindow({
    content: "<p>Poke Poke — my favorite lunch spot!</p>"
  });

  pokeMarker.addListener("click", () => {
    pokeInfo.open(map, pokeMarker);
  });
}

// image slider
const sliderImages = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  document.getElementById("slider-img").src = sliderImages[currentSlide];
}

setInterval(changeSlide, 2500);
