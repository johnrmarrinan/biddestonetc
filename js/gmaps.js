var venueMap;
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.464,-2.198),
    pancontrol: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  venueMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var pinLocation = new google.maps.LatLng(51.4641,-2.198);
        
  var startPosition = new google.maps.Marker({    // Create a new marker
    position: pinLocation,                        // Set its position
    map: venueMap,                                // Specify the map
    icon: "./images/img_pin.png"                       // Path to image from HTML
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
