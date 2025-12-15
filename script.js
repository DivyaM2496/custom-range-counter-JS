let fromEl = document.getElementById("fromUserInput");
let toEl = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtnEl = document.getElementById("startBtn");

startBtnEl.onclick = function() {
    let fromValue = fromEl.value;
    let toValue = toEl.value;
    if (fromValue === "") {
        alert("Enter valid input");
        return;
    } else if (toValue === "") {
        alert("Enter valid input");
        return;
    } else {
        let counter = parseInt(fromValue);
        let id = setInterval(function() {
            counterText.textContent = counter;
            counter += 1;
        }, 1000);
        if (counter === parseInt(toValue)) {
            clearInterval(id);
        }
    }
};
