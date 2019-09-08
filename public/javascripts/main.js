console.log('archivo cargado');

// Formulario registro
const registro_form = document.getElementById('registro_form');
const registro_usuario = document.getElementById('registro_usuario');
const registro_email = document.getElementById('registro_email');
const registro_password = document.getElementById('registro_password');
const registro_verif_password = document.getElementById('registro_verif_password');
const registro_acepto = document.getElementById('registro_acepto');
const registro_boton = document.getElementById('registro_boton');

console.log('archivo cargado');

var validar = () => {
  if (registro_usuario.value.trim() == "" || registro_usuario == null) return false;

  if (!registro_email.validity.valid) return false;

  if (registro_password.value.trim() == "" || registro_password == null) return false;

  if (registro_password.value != registro_verif_password.value) return false;
  
  if (!registro_acepto.checked) return false;

  return true;
};

registro_usuario.addEventListener("blur", event => {
  registro_boton.disabled = !validar();
}, false);

registro_email.addEventListener("blur", event => {
  registro_boton.disabled = !validar();
}, false);

registro_password.addEventListener("blur", event => {
  registro_boton.disabled = !validar();
}, false);

registro_verif_password.addEventListener("blur", event => {
  registro_boton.disabled = !validar();
}, false);

registro_acepto.addEventListener("change", event => {
  registro_boton.disabled = !validar();
}, false);
