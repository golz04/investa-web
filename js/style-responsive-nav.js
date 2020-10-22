function openNav(){
    var x = document.getElementById("navbarWhite");
    if (x.className === "navbar"){
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}