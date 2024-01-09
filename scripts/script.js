const inputValue = document.querySelector("input");
const btn = document.querySelector("button");

function getValue() {
    if (!isNaN(inputValue.value)) {
        console.log('Numeric value entered');
        sumofDigits(inputValue.value);
    } else {
        console.log('String value entered');
        thalaOrNot(inputValue.value.length);
    }
}

function sumofDigits(num) {
    let numString = num.toString();
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }
    thalaOrNot(sum);
}


function thalaOrNot(sum) {
    if (sum === 7) {
        alert("Thala For A Reason!");
        var audio = new Audio("images/thalabgm.mp3");
        audio.play();
        setTimeout(() => {
            audio.pause();
        }, 10000);
    } else {
        alert("Mera Lund Jiye Aisi Zindagi!");
    }
}

document.addEventListener("keydown", (event) => {
    let name = event.key;
    if (name === "Enter") {
        getValue();
    }
})