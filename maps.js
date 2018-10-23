

//CENTERED MAP AROUND CHICAGO 
console.log("hello");

function initMap() {
  console.log("centered map");
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lng: -87.618, lat: 41.896 }
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('geoCode').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });

  //GEOCODE ADDRESS 

  function geocodeAddress(geocoder, resultsMap) {
    console.log("geoCode")

    var address = document.getElementById('address').value;
    console.log('address');
    geocoder.geoCode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location

    
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  //CTA LAYER 

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);



  //EVENT MARKERS 
  // function initMap() {
  console.log("event");
  var myLatLng = { lat: 41.905545, lng: -87.626710 };
  var myLatLng2 = { lat: 41.890548, lng: -87.627286 };
  var myLatLng3 = { lat: 41.890603, lng: -87.65 };
  var pollingPlace = { lat: 41.889, lng: -87.627286 };
  //  var APIKey = "AIzaSyDaojct9_XgY_XfEgjZ8LTZOaFyk_mJEDc";
  // var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo" + APIKey ;
  //      $.ajax({
  //    url: queryURL,
  //     method: "GET"
  //     }).then(function(response) {
  //     console.log(queryURL); 
  //   console.log(response);
  //     var contentString = response;

  var contentString = "fbrfbskjnd";


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'event 1',
    icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',

  });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'event 2',
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',

  });
  var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'event 2',
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',

  });
  var pollingPlace = new google.maps.Marker({
    position: pollingPlace,
    map: map,
    title: 'Polling Place',
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',


  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}

