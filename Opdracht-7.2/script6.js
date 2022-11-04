function PrijsChecken(Prijs) {
  if (100 - Prijs >= 0) {
    document.getElementById("antwoord").innerHTML = "U heeft genoeg geld!";
    document.getElementById("antwoord").style.color = "green";
  } else {
    document.getElementById("antwoord").innerHTML = "Helaas, te weinig geldt";
    document.getElementById("antwoord").style.color = "red";
  }
}
