const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.registrar-link');
const loginLink=document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
}
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}

 const formulario = document.getElementById('formulario');
 const inputs = document.querySelectorAll('#formulario input');

 const expresiones = {
 	usuario: /^[a-zA-Z0-9]{4,16}$/,
 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
 	password: /^.{4,12}$/,
	 password2: /^.{4,12}$/, 
 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 }

 const campos = {
 	usuario: false,
 	nombre: false,
 	password: false,
 	password2: false,
 	correo: false,
 }

 const validarFormulario = (e) => {
 	switch (e.target.name) {
 		case "usuario":
 			validarCampo(expresiones.usuario, e.target, 'usuario');
 		break;
 		case "nombre":
 			validarCampo(expresiones.nombre, e.target, 'nombre');
 		break;
 		case "password":
 			validarCampo(expresiones.password, e.target, 'password');
			
 		break;
 		case "password2":
 			validarCampo(expresiones.password, e.target, 'password2');
 		break;
 		case "correo":
 			validarCampo(expresiones.correo, e.target, 'correo');
 		break;
 	}
 }

 const validarCampo = (expresion, input, campo) => {
 	if(expresion.test(input.value)){
 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle');
 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle');
 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
 		campos[campo] = true;
 	} else {
 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle');
 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle');
 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
 		campos[campo] = false;
 	}
 }

 inputs.forEach((input) => {
 	input.addEventListener('keyup', validarFormulario);
 	input.addEventListener('blur', validarFormulario);
 });

 formulario.addEventListener('submit', (e) => {
 	e.preventDefault();

 	const terminos = document.getElementById('terminos');
 	if(campos.usuario && campos.password ||campos.nombre && campos.correo && campos.password2 ){
 		formulario.reset();

 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
 		setTimeout(() => {
 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
 		}, 5000);

 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
 			icono.classList.remove('formulario__grupo-correcto');
 		});
 	} else {
 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
 	}
 });