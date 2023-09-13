let time = prompt("What time is it where you at? 0-23");
let originalColour = "rgb(128, 128, 128)";

if (time <= 12) {
    document.documentElement.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    alert("Good morning to you!");
} else if (time >= 12) {
    document.documentElement.style.backgroundColor = originalColour;
    document.body.style.backgroundColor = originalColour;
    alert("Good evening to you!");
}