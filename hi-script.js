function getUserName() {
    let username = prompt("Please enter a username (between 4 and 20 characters):");

    if (username === null) {
        console.log("User canceled the input.");
        return;
    }

    if (username.length >= 4 && username.length <= 20) {
        console.log("Username accepted: " + username);
        document.write("Welcome! " + username + "... let's get baking!!");
    } else {
        alert("Invalid username. Username must be between 4 and 20 characters.");
        getUserName();
    }
}
