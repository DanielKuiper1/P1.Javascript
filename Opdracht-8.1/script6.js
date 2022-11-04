function Plus() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 + g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  if (g1 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
  if (g2 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
}
function Min() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 - g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  if (g1 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
  if (g2 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
}
function Keer() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 * g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  if (g1 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
  if (g2 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
}
function Deel() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 / g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  if (g1 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
  if (g2 === 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
}
