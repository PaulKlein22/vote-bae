function loadClient() {
    var APIkey = "AIzaSyDaojct9_XgY_XfEgjZ8LTZOaFyk_mJEDc";
    var address = $("#geoCode").val().trim();
    var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + address +"&key=" + APIkey

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
    });
}
$("#submitButton").on("click", function(event){
    event.preventDefault();
    loadClient();
});