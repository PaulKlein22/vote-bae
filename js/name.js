//call inputed infomation from index into html 
//nameInput
//grab nameInput value 
//store in variable or in local storage 
//grab inputName and put into header 
//add attribute to header that correlates to nameInput



// When users click "save-name"
$("#submitButton").on("click", function (event) {
    // This line prevents the page from refreshing when a user hits "enter".
    event.preventDefault();

    // Clear the HTML from the greeting header
    $("#myEvent").html("");

    // Grab the user input
    var username = $("#nameInput").val().trim();


    // Clear absolutely everything stored in localStorage using localStorage.clear()
    localStorage.clear();

    // Store the username into localStorage using "localStorage.setItem"
    localStorage.setItem("name", username);

    // And display that name for the user using "localStorage.getItem"
    $("#myEvent").text(localStorage.getItem("name"));
    console.log(username);

    $("#myEvent").text(username + "'s Voting Day");
});

// By default (upon load) show the name stored in localStorage using "localStorage.getItem"
$("#myEvent").text(localStorage.getItem("name"));
//  $("#myEvent").text(username + "'" + "s" + "Voting Day")
// $("#myEvent").html("Voting Dat" + "name");




