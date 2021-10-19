const inputEmail = document.getElementById("inputEmail");
const imgError = document.getElementById("imgError");
const btnEnviar = document.getElementById("btnEnviar");
const msgError = document.getElementById("msgError");
const formEmail = document.getElementById("formEmail");

btnEnviar.onclick = function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    imgError.style.display = "none";
    msgError.style.display = "none";
    formEmail.style.borderColor = "hsl(0, 36%, 70%)"
  } else {
    imgError.style.display = "block";
    msgError.style.display = "block";
    formEmail.style.borderColor = "hsl(0, 93%, 68%)";
  } 
}