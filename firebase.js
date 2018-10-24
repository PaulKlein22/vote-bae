console.log("hello")
var config = {
    apiKey: "AIzaSyBsNnfOplB3AqJJTT_cjbDfNZ-pofXg97g",
    authDomain: "vote-bae-1a6bf.firebaseapp.com",
    databaseURL: "https://vote-bae-1a6bf.firebaseio.com",
    projectId: "vote-bae-1a6bf",
    storageBucket: "vote-bae-1a6bf.appspot.com",
    messagingSenderId: "633823897160"
};
firebase.initializeApp(config);

console.log(name);

var database = firebase.database();

$("#submitButton").on("click", function (event) {
    event.preventDefault();

    var name = $("#nameInput").val();
    console.log(name)
    var geoCode = $("#geoCode").val();
    console.log(geoCode)
    var email = $("#emailInput").val();
    console.log(email)
  

    var userInfo = {
        name: name,
        geoCode: geoCode,
        email: email,
    };

    console.log(userInfo);

    database.ref().push(userInfo);
    // database.ref().push(geoCode);
    // database.ref().push(email);

    // console.log(name.name);
});