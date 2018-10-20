function loadClient() {
    gapi.client.setApiKey("AIzaSyDaojct9_XgY_XfEgjZ8LTZOaFyk_mJEDc");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest")
        .then(function () { console.log("GAPI client loaded for API"); 
        // event.preventDefault();
    })
        .catch(function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.civicinfo.voterInfoQuery({})
        .then(function (response) {
            // grab value from address input ID
            console.log("response returned");
            // event.preventDefault();
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
gapi.load("client");

$("#submitButton").on("click", function(event){
    event.preventDefault();
    console.log("submit button clicked");
    loadClient();
    execute();
});

// $("#submitButton").on("click", loadClient);
// $("#submitButton").on("click", execute);