var sumTotal = 0;
function CalcTotal(item, value) {

    sumTotal = sumTotal + value;
    document.getElementById("Total").value = sumTotal;
    alert("You added " + item + " to your cart");

    var yourItem = item;
    var display = "<ul>" + yourItem + "</ul>";
    $("#YourItem").append(display);
    //document.getElementById("YourItem") = yourItem;
    // $("#YourItem").append(yourItem);

}



function Clear() {
    var tots = document.getElementById("Total");
    tots.value = "";
    sumTotal = 0;
}