document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const formulario1 = document.getElementById('formulario1');
    const inputs = document.querySelectorAll('#formulario input');
    const inputsRegistro = document.querySelectorAll('#formulario1 input');
    
    // Expresiones regulares
    const expresiones = {
        usuario: /^[a-zA-Z0-9]+$/,  // Solo letras y números, sin caracteres especiales
        password: /^.{4,}$/, // Contraseña con al menos 4 caracteres
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Validación de correo
        password2: /^(?=.*\d)(?=.*[a-zA-Z])(?=\S+$).{6,}$/,
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Contraseña con números, letras y sin espacios
    };

    // Función para validar los campos
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
                break;
            case "password2":
                validarCampo(expresiones.password2, e.target, 'password2');
                break;
			case "nombre":
					validarCampo(expresiones.nombre, e.target, 'nombre');
					break;
        }
    };

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('formulario__validacion-estado-activo');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('formulario__validacion-estado-activo');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        }
    };

    // Evento de submit para validar todos los campos
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();  // Evita el envío del formulario mientras se validan los campos
        
        inputs.forEach(input => {
            validarFormulario({ target: input });
        });

        const formularioCorrecto = document.querySelectorAll('.formulario__grupo-correcto').length === inputs.length;
        if (formularioCorrecto) {
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-active');
        }
    });

    // Lo mismo para el formulario de registro
    formulario1.addEventListener('submit', (e) => {
        e.preventDefault();
        
        inputsRegistro.forEach(input => {
            validarFormulario({ target: input });
        });

        const formularioCorrecto1 = document.querySelectorAll('.formulario__grupo-correcto').length === inputsRegistro.length;
        if (formularioCorrecto1) {
            document.getElementById('formulario__mensaje1-exito').classList.add('formulario__mensaje1-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje1-exito').classList.remove('formulario__mensaje1-exito-activo');
            }, 5000);
        } else {
            document.getElementById('formulario__mensaje1').classList.add('formulario__mensaje1-active');
        }
    });

    // Agregar los listeners a los inputs para validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    inputsRegistro.forEach(input => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
});






 const wrapper=document.querySelector('.wrapper');
 const registerLink=document.querySelector('.registrar-link');
 const loginLink=document.querySelector('.login-link');

 registerLink.onclick = () =>{
     wrapper.classList.add('active');
 }
 loginLink.onclick = () =>{
     wrapper.classList.remove('active');
 }

//  const formulario = document.getElementById('formulario');
//  const inputs = document.querySelectorAll('#formulario input');

//  const expresiones = {
//  	usuario: /^[a-zA-Z0-9]{4,16}$/,
//  	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
//  	password: /^.{4,12}$/,
// 	 password2: /^.{4,12}$/, 
//  	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//  }

//  const campos = {
//  	usuario: false,
//  	nombre: false,
//  	password: false,
//  	password2: false,
//  	correo: false,
//  }

//  const validarFormulario = (e) => {
//  	switch (e.target.name) {
//  		case "usuario":
//  			validarCampo(expresiones.usuario, e.target, 'usuario');
//  		break;
//  		case "nombre":
//  			validarCampo(expresiones.nombre, e.target, 'nombre');
//  		break;
//  		case "password":
//  			validarCampo(expresiones.password, e.target, 'password');
			
//  		break;
//  		case "password2":
//  			validarCampo(expresiones.password, e.target, 'password2');
//  		break;
//  		case "correo":
//  			validarCampo(expresiones.correo, e.target, 'correo');
//  		break;
//  	}
//  }

//  const validarCampo = (expresion, input, campo) => {
//  	if(expresion.test(input.value)){
//  		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
//  		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
//  		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle');
//  		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle');
//  		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
//  		campos[campo] = true;
//  	} else {
//  		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
//  		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
//  		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle');
//  		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle');
//  		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
//  		campos[campo] = false;
//  	}
//  }

//  inputs.forEach((input) => {
//  	input.addEventListener('keyup', validarFormulario);
//  	input.addEventListener('blur', validarFormulario);
//  });

//  formulario.addEventListener('submit', (e) => {
//  	e.preventDefault();

//  	const terminos = document.getElementById('terminos');
//  	if(campos.usuario && campos.password ||campos.nombre && campos.correo && campos.password2 ){
//  		formulario.reset();

//  		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
//  		setTimeout(() => {
//  			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
//  		}, 5000);

//  		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
//  			icono.classList.remove('formulario__grupo-correcto');
//  		});
//  	} else {
//  		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
//  	}
//  });