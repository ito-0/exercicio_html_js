const form = document.getElementById("form-deposito");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("CampoB");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (parseInt(campoB.value) > parseInt(campoA.value)) {
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    campoA.value = "";
    campoB.value = "";
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
})