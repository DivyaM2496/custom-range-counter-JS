# ⏱️ Counter App

## 📌 Overview

The **Counter App** is a simple web-based JavaScript application that counts numbers from a specified start value to an end value. The app updates the count every second and displays it dynamically on the webpage.

This project is perfect for beginners to practice **DOM manipulation**, **event handling**, and **timers** in JavaScript.

---

## 🧩 Features

* Input a start value and an end value
* Display a running counter from start to end
* Updates the counter every second
* Alerts user if input fields are empty

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. User inputs a **start** and **end** value.
2. Clicking **Start** triggers the `onclick` function:

   * Validates input fields
   * Initializes the counter with the start value
   * Uses `setInterval` to update the counter every 1 second
   * Displays the current counter value dynamically
   * Stops counting when the counter reaches the end value

---

## 📂 Project Structure

```
counter-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
startBtnEl.onclick = function() {
    let fromValue = fromEl.value;
    let toValue = toEl.value;

    if (fromValue === "" || toValue === "") {
        alert("Enter valid input");
        return;
    }

    let counter = parseInt(fromValue);
    let id = setInterval(function() {
        counterText.textContent = counter;
        if (counter === parseInt(toValue)) {
            clearInterval(id);
        }
        counter += 1;
    }, 1000);
};
```

---

## 📚 Concepts Covered

* DOM element selection and update
* Handling user input
* `setInterval` and `clearInterval` for timers
* Conditional statements for validation and stopping the counter

---

## 🚀 Future Improvements

* Allow counting down from a higher number to a lower number
* Add pause and reset buttons
* Style counter dynamically (colors, animations)
* Handle invalid or non-numeric input gracefully

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript timers**, **DOM manipulation**, and **input validation** skills.

---

⭐ If you find this project useful, feel free to star the repository!
