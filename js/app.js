function loadClient() {
    var APIkey = "AIzaSyDaojct9_XgY_XfEgjZ8LTZOaFyk_mJEDc";
    var address = $("#geoCode").val().trim();
    var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + address +"&key=" + APIkey

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        // JSON.stringify(response);
        // console.log(response);
        // console.log(response.pollingLocations[0].address.locationName);
        // console.log(response.pollingLocations[0].address.line1);
        // console.log(response.pollingLocations[0].address.city);
        // console.log(response.pollingLocations[0].address.state);
        // console.log(response.pollingLocations[0].address.zip);
        // console.log(response.pollingLocations[0].pollingHours);

        var tRow = $("<tr>");
        var location = $("<td>").text(response.pollingLocations[0].address.locationName);
        var streetAddress = $("<td>").text(response.pollingLocations[0].address.line1);
        var cityName = $("<td>").text(response.pollingLocations[0].address.city);
        var stateName = $("<td>").text(response.pollingLocations[0].address.state);
        var zipCode = $("<td>").text(response.pollingLocations[0].address.zip);
        var hours = $("<td>").text(response.pollingLocations[0].pollingHours);

        // appends table data to table row
        tRow.append(location, streetAddress, cityName, stateName, zipCode, hours);
        // appends table row to table body
        $("tbody").append(tRow);
    });
}
// $("#submitButton").on("click", function(event){
//     event.preventDefault();
//     loadClient();
// });
$("#submitButton").click(function () {
    $("#index").hide("show");
 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get address form
var addressForm = $("#address-form");

//listen for submit
// $("#submitButton").on("click", geocode);

function geocode(){
    //prevent the submit
    // event.preventDefault();

    var location = $("#geoCode").val();
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: 'AIzaSyAUJHBoYX51fGmAfp6vKcVMxbNtQFPExZc'
        }
    })
    .then(function(response){
        //geometry (long and lat)
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var geometryOutput = 
        `
            <ul class="list-group">
                <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
                <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
            </ul>
        `;

    //output to app
    $("#geometry").html(geometryOutput);
    console.log(lat);
    console.log(lng);
})
}

$("#submitButton").on("click", function(event){
    event.preventDefault();
    geocode();
});

$(document).ready(function(){
    $(".first").hide();
    $(".second").hide();

    $("#submitButton").click(function(){
        $("#voteSched").hide();
        // $(".second").show();

    $(".first").show();
    });
    
    });

    // $(document).ready(function(){
    //     $(".second").hide();
    //     $("#submitButton").click(function(){
    //     $(".second").show();
    //     });
        
    //     });