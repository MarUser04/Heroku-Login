/*var boton_crear= document.getElementById('crear');
var contenedor= document.getElementsByClassName('container');

boton_crear.addEventListener('click', function(){
	var mensaje= document.createElement('div');

	mensaje.setAttribute('id','cuentaCreada');
	mensaje.innerHTML= '<p>Cuenta creada con Exito!</p>';
	mensaje.classList.add('mensajeCreado');

	document.body.contenedor.appendChild(mensaje);
});*/

var boton= document.getElementById('crear');



boton.addEventListener('click', function(){
	var nombre= document.getElementById('nombreCampo').value;
	var email= document.getElementById('emailCampo').value;
	var clave= document.getElementById('passwordCampo').value;
	var terminos= document.getElementById('check');
	
	if(nombre.length===0){
		alert("Ingrese un nombre.");
	}
	if(email.length===0){
		alert("Ingrese un email.");
	}
	if(clave.length===0){
		alert("Ingrese una contraseña.");
	}
	if(terminos.checked==false){
		alert("Acepta los terminos de mierda.");
	}

	alert("Cuenta creada exitosamente!");


});

var boton2= document.getElementById('btn2');

boton2.addEventListener('click', function(){
	alert("Servidores caidos por imbecil que borro una linea de codigo. Intenta más tarde.");
})