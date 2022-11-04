function Plus() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 + g2;
  console.log(calc);
  console.log(document.get);
  document.getElementById("antwoord").innerHTML = calc;
  CheckGetal(g1, g2);
}
function Min() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 - g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  CheckGetal(g1, g2);
}
function Keer() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 * g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  CheckGetal(g1, g2);
}
function Deel() {
  var g1 = parseInt(document.getElementById("x").value, 10);
  var g2 = parseInt(document.getElementById("y").value, 10);
  var calc = g1 / g2;
  console.log(calc);
  document.getElementById("antwoord").innerHTML = calc;
  CheckGetal(g1, g2);
}
function CheckGetal(g1, g2) {
  if (g1 == 0 || g2 == 0) {
    let fout = "het getal is te laag";
    document.getElementById("antwoord").innerHTML = fout;
  }
}