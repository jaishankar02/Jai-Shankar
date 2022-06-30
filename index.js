//TOGGLE EFFECT BUTTON
var toggleButton = document.querySelector('.burger-lines');
var navbarOption = document.querySelector('.nav-option-container');
var toggleIcon1 = document.querySelector('.burger-lines .fa-xmark');
var toggleIcon2 = document.querySelector('.burger-lines .fa-bars');

toggleButton.onclick = function () {
    if (navbarOption.style.display == "") {
        navbarOption.style.display = "block";
        toggleIcon1.style.display = "block";
        toggleIcon2.style.display = "none";
    }
    else {
        navbarOption.style.display = ""
        toggleIcon1.style.display = "none";
        toggleIcon2.style.display = "block";
    }

}

function hidenav() {
    if (window.innerWidth <= 768) {
        navbarOption.style.display = "";
        toggleIcon1.style.display = "none";
        toggleIcon2.style.display = "block";
    }
}