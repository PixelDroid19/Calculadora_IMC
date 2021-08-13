const getMale = document.getElementById("male"),
  getFemale = document.getElementById("female");

let M = 1,
  F = 1,
  i = 0;

function Male() {
  switch (M) {
    case 1:
      getMale.style.color = "rgba(10, 10, 209)";
      getFemale.style.color = "";
      localStorage.setItem("Sexo", "Hombre");
      i = 1;
      break;
  }

  console.log();
}

function Female() {
  switch (F) {
    case 1:
      getFemale.style.color = "rgba(253, 155, 155, 0.8)";
      getMale.style.color = "";
      localStorage.setItem("Sexo", "Mujer");
      i = 2;
      break;
  }
  console.log(F);
}

getMale.addEventListener("click", Male);
getFemale.addEventListener("click", Female);
