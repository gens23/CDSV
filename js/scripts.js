function validar(nombre, apellidos, fechaNacimiento, sexo, usuario, password) {
    let concatenarMensaje = "";
    
    if(nombre == '' || nombre == null) {
        concatenarMensaje = concatenarMensaje + "> Ingrese el nombre";
    }
    if(apellidos == '' || apellidos == null) {
        concatenarMensaje = concatenarMensaje + "<br/> > Ingrese el apellido";
    }
    /*
    if(fechaNacimiento <= 17 && fechaNacimiento >= 0) {
        concatenarMensaje = concatenarMensaje + "<br/> > El usuario es menor de edad, no puede registrarse";
    } 
    */
    if(sexo == '' || sexo == null) {
        concatenarMensaje = concatenarMensaje + "<br/> > Seleccione el sexo";
    }
    if(fechaNacimiento == '' || fechaNacimiento == null) {
        concatenarMensaje = concatenarMensaje + "<br/> > Ingresa tu fecha de nacimiento";
    }
    if(usuario == '') {
        concatenarMensaje = concatenarMensaje + "<br/> > ingresa el usuario";
    }
    if(password.length < 6) {
        concatenarMensaje = concatenarMensaje + "<br/> > La contraseña debe ser mayor o igual a 6 Dígitos";
    }
    
    document.getElementById("msg").classList.add("visually-hidden");
    console.log("wiiiiiiiiii");
    if(concatenarMensaje != '') {
        document.getElementById("msg").classList.remove("visually-hidden");
        document.getElementById("msg").innerHTML = concatenarMensaje;
        return false;
    }
    return true;
}
function registro() {
    let debug = true;
    let mostrarMensaje = false;
    
    // variables
    let $nombre = document.getElementById("nombre");
    let $apellidos = document.getElementById("apellidos");
    let $fechaNacimiento = document.getElementById("fechaNacimiento");
    let $domicilio = document.getElementById("domicilio");
    let $usuario = document.getElementById("usuario");
    let $contraseña = document.getElementById("contraseña");
    let $sexo = document.getElementById("sexo");
    let $formulario = document.getElementById("formRegister");

    if(debug) {
        console.log("input nombre: " + $nombre + " el valor que tiene es de " + $nombre.value);
        console.log("input apellidos: " + $apellidos + " el valor que tiene es de " + $apellidos.value);
        console.log("input fechaNacimiento: " + $fechaNacimiento + " el valor que tiene es de " + $fechaNacimiento.value);
        console.log("input domicilio: " + $domicilio + " el valor que tiene es de " + $domicilio.value);
        console.log("input usuario: " + $usuario + " el valor que tiene es de " + $usuario.value);
        console.log("input contraseña: " + $contraseña + " el valor que tiene es de " + $contraseña.value);
        console.log("select sexo: " + $sexo + "el valor que tiene es de " + $sexo.value);
    }

    let nombreUsuario = $nombre.value;
    let apellidosUsuario = $apellidos.value;
    let fechaNacimientoUsuario = $fechaNacimiento.value;
    let sexoUsuario = $sexo.value;
    let domicilioUsuario = $domicilio.value;
    let usuario = $usuario.value;
    let contraseña  = $contraseña.value; 


    if(validar(nombreUsuario, apellidosUsuario, fechaNacimientoUsuario, sexoUsuario, usuario, contraseña)) {
            // Recoger los datos del formulario
            /*
            const formData = new FormData($formulario);
            const data = Object.fromEntries(formData.entries());
            console.log(`formData ${data} `);
            // Enviar la petición con fetch
            fetch('http://localhost:4567/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => console.log('Respuesta del servidor:', data))
            .catch(error => console.error('Request fails:', error));
       */
    }
}