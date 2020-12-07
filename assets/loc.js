var apiKey = "AIzaSyCNFR2HhVZyNOK4UtI9rpySLxvhEmE6g2Y";

var script = document.createElement("script");
script.src =
	"https://maps.googleapis.com/maps/api/js?key=" +
	apiKey +
	"&callback=initMap&language=en";
script.defer = true;

// Initialize and add the map
window.initMap = function () {
	// The location of Tops
	const tops = { lat: 30.820783960692022, lng: -88.09512177122673 };
	// The map, centered at Tops
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 13,
		center: tops,
	});
	// The marker, positioned at Tops
	const marker = new google.maps.Marker({
		position: tops,
		map: map,
	});
};

// Apend the script to page
document.head.appendChild(script);
