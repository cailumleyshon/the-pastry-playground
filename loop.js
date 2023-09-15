function getRating() {
  let rating = prompt("What star rating would you give this page from 1-5");

  if (rating <= 5 && rating > 0) {
    for (i = 0; i < rating; i++) {
      document.write("<img id='croissant' src='croissant.png'/>");
    }
  } else {
    alert("I said 1-5");
    getRating();
  }
}
