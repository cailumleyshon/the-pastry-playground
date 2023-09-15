let cookiesConfirmMessage;

function allowCookies() {
let cookiesConfirmMessage = confirm("This site uses pastries (not cookies!). Do you accept sharing your pastries?");
}

allowCookies();

if (cookiesConfirmMessage) {
    alert("Great! Enjoy sharing your pastries with us!");
} else {
    alert("No problem. Your pastries are safe. Feel free to explore the site.");
}
