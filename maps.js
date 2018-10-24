//CENTERED MAP AROUND LA 
console.log("hello");
function initMap() {
  console.log("centered map");
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lng: -118.467372, lat: 34.073661 }
  });
  // var geocoder = new google.maps.Geocoder();

  // document.getElementById('map').addEventListener('click', function () {
  //     geocodeAddress(geocoder, map);
  // });

  //GEOCODE ADDRESS 
  console.log("here")

  // function geocodeAddress(geocoder, resultsMap) {
  //     console.log("geoCode")

  //     var address = document.getElementById('address').value;
  //     console.log('address');
  //     geocoder.geoCode({ 'address': address }, function (results, status) {
  //         if (status === 'OK') {
  //             console.log("stauts ok")
  //             resultsMap.setCenter(results[0].geometry.location);
  //             var marker = new google.maps.Marker({
  //                 map: resultsMap,
  //                 position: results[0].geometry.location
  //             });
  //         } else {
  //             console.log('Geocode was not successful for the following reason: ' + status);
  //         }
  //     });
  // }



  //EVENT MARKERS 

  console.log("event");
  var myLatLng = { lat: 34.074016, lng: -118.464304 };
  var myLatLng2 = { lat: 34.060403, lng: -118.458310 };
  var myLatLng3 = { lat: 34.068259, lng: -118.443221 };
  var myLatLng4 = { lat: 34.061212, lng: -118.468482 };
  var myLatLng5 = { lat: 34.069841, lng: -118.455283 };
  var pollingPlace = { lat: 34.072988, lng: -118.468685 };


  // var contentString = '<h1>Polling Place</h1>'
  // var event1 = "<p> Autumn Corn Maze</p>";
  // var event2 = "Fall Pop Up in the Square";
  // var event3 = "Community Farmers Market";
  // var event4 = "Taco Tuesday at Bar Tacoma";
  // var event5 = "Tequila Tuesday at Montgomery's";

  //  var polling =  new google.maps.InfoWindow({
  //      position:pollingPlace,
  //    content: contentString,
  //  });
  // var cornMaze = new google.maps.InfoWindow({
  //   content: event1,
  //   position:myLatLng,
  //   title: 'Autumn Corn Maze'

  // });
  // var popUp = new google.maps.InfoWindow({
  //   content: event2,
  //   position:myLatLng2,

  // });
  // var farmersMarket = new google.maps.InfoWindow({
  //   content: event3,
  //   position:myLatLng3,

  // });
  // var taco = new google.maps.InfoWindow({
  //   content: event4,
  //   position:myLatLng4,

  // });
  // var tequila = new google.maps.InfoWindow({
  //   content: event5,
  //   position:myLatLng5,

  // });


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Autumn Corn Maze',
    icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',

  });
  // marker.addListener('click', function () {
  //   cornMaze.open(map, marker);
  // });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Fall Pop Up',
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',

  });
  // marker.addListener('click', function () {
  //   popUp.open(map, marker);
  // });
  var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Community Farmers Market',
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',

  });
  // marker.addListener('click', function () {
  //   farmersMarket.open(map, marker);
  // });
  var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Taco Tuesday',
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',

  });
  // marker.addListener('click', function () {
  //   taco.open(map, marker);
  // });
    var marker5 = new google.maps.Marker({
      position: myLatLng5,
      map: map,
      title: 'Tequila Tuesday',
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',

    });
    // marker.addListener('click', function () {
    //   tequila.open(map, marker);
    // });
      var pollingPlace = new google.maps.Marker({
        position: pollingPlace,
        map: map,
        title: 'Polling Place',
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',


      // });
      // marker.addListener('click', function () {
      //   polling.open(map, marker);

      // });

    })}
