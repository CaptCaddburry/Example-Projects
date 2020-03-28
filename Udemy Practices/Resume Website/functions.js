function navBarChange() {
    var x = document.getElementById("dropDownClick");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

function signUpButton() {
    alert("Thank you for signing up to our service!");
}

function signInButton() {
    alert("Thank you for signing in to your account!");
}