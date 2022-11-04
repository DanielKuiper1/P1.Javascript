function PlusEen(antwoord) {
  if (antwoord >= 10) {
    document.getElementById("antwoord").innerHTML = 0;
  } else {
    var calc = parseInt(antwoord, 10) + 1;
    document.getElementById("antwoord").innerHTML = calc;
  }
}
