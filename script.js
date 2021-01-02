const { table } = require("console");

function modoDiurno() {
  document.body.style.backgroundColor = "lightslategrey";

  for (let i = 1; i < table.length; i++) {
    table[i].style.color = "black";

    if (i % 2 == 0) {
      table[i].style.backgroundColor = "palevioletred";
    } else {
      table[i].style.backgroundColor = "pink";
    }
  }
}

function modoNocturno() {
  document.body.style.backgroundColor = "darkslategrey";

  for (let i = 1; i < table.length; i++) {
    table[i].style.color = "black";

    if (i % 2 == 0) {
      table[i].style.backgroundColor = "grey";
    } else {
      table[i].style.backgroundColor = "black";
    }
  }
}
