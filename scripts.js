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

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: chicago,
    mapTypeId: "hybrid"
  });

  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    title: "Chicago"
  });

  const info = new google.maps.InfoWindow({
    content: "<p>Chicago :)</p>"
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}
