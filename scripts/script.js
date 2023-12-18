const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const thalaHeading = document.querySelector(".thala h1");

function thalaNot() {
    if (searchBox.value.length === 7) {
        thalaHeading.style.display = "block";
        var thalaBgm = new Audio("images/thalabgm.mp3");
        thalaBgm.play();
    } else {
        thalaHeading.style.display = "none";
    }
}

searchBtn.addEventListener('click', thalaNot);