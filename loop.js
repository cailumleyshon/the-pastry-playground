function getRating() {
  let rating = prompt("What star rating would you give this page from 1-5");

  while (!(rating > 0 && rating <= 5)) {
    alert("Please enter a rating between 1 and 5.");
    rating = prompt("What star rating would you give this page from 1-5");
  }

  for (let i = 0; i < rating; i++) {
    document.write("<img id='croissant' src='croissant.png'/>");
  }
}
