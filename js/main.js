function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('input-email').value;
  var pass = document.getElementById('input-password').value;
  var opc = document.getElementById('opc').value;
  var val = document.getElementById('valida');

  if (name == 0 || name == null || !(/^([A-Z]{1}[a-z]+[\s]*)+$/.test(name))){
  alert("Ingrese su nombre, la primera letra debe ser mayúscula");
  return false;

}else if (!(/^([A-Z]{1}[a-z]+[\s]*)+$/.test(lastname)) || lastname == null ) {
  alert("Ingrese su apellido, la primera letra debe ser mayúscula");
  return false;

} else if (!(/\w+@{1}\w+\.+[a-z]{3}$/.test(email))){
  alert("La dirección de email no es correcta.");
  return false;

} else if (!(/^[a-z\d]{6,8}$/.test(pass))|| pass=="password" || pass=="123456" || pass== "098754"){
  alert("La contraseña es invalida ");
return true;

  } else if (opc==0 || opc==null){
    alert("Elige una opción de bicicleta");
    return false;
  }
}
