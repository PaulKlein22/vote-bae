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
$("#submitButton").on("click", function(event){
    event.preventDefault();
    loadClient();
});