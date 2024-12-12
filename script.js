var a = ["phone", "apple", "window", "duck", "bank"];
var b = 5;

var c = a[Math.floor(Math.random() * a.length)];
var d = [];
for (var e = 0; e < c.length; e++) {
    d.push("_");
}

var f = [];
var g = 0;

function h() {
    document.getElementById("word-display").textContent = "Word: " + d.join(" ");
    document.getElementById("guessed-letters").textContent = "Guessed Letters: " + (f.length > 0 ? f.join(", ") : "None");
    document.getElementById("attempts-remaining").textContent = "Attempts Remaining: " + (b - g);
}

h();

document.getElementById("guess-button").addEventListener("click", function() {
    var i = document.getElementById("guess-input");
    var j = i.value.toLowerCase();
    i.value = "";
    document.getElementById("message").textContent = "";

    if (!j || j.length !== 1 || !/[a-z]/.test(j)) {
        document.getElementById("message").textContent = "Please enter a valid single letter.";
        return;
    }

    if (f.indexOf(j) !== -1) {
        document.getElementById("message").textContent = "You already guessed that letter.";
        return;
    }

    f.push(j);

    if (c.indexOf(j) !== -1) {
        for (var k = 0; k < c.length; k++) {
            if (c[k] === j) {
                d[k] = j;
            }
        }
        document.getElementById("message").textContent = "Good job! That letter is in the word.";
    } else {
        g++;
        document.getElementById("message").textContent = "Sorry, that letter is not in the word.";
    }

    h();

    if (d.join("") === c) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word: " + c;
        document.getElementById("guess-button").disabled = true;
        document.getElementById("guess-input").disabled = true;
    } else if (g >= b) {
        document.getElementById("message").textContent = "Game over! The correct word was: " + c;
        document.getElementById("guess-button").disabled = true;
        document.getElementById("guess-input").disabled = true;
    }
});
