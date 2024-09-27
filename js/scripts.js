function validar(nombre, apellidos, edad, sexo, usuario, password) {
    let concatenarMensaje = "";
    
    if(nombre == '' || nombre == null) {
        concatenarMensaje = concatenarMensaje + "> Ingrese el nombre";
    }
    if(apellidos == '' || apellidos == null) {
        concatenarMensaje = concatenarMensaje + "<br/> > Ingrese el apellido";
    }
    if(edad <= 17 && edad >= 0) {
        concatenarMensaje = concatenarMensaje + "<br/> > El usuario es menor de edad, no puede registrarse";
    } 
    if(sexo == '' || sexo == null) {
        concatenarMensaje = concatenarMensaje + "<br/> > Seleccione el sexo";
    }
    if(edad <= -1) {
        concatenarMensaje = concatenarMensaje + "<br/> > Todavía no naces";
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
    let $edad = document.getElementById("edad");
    let $domicilio = document.getElementById("domicilio");
    let $usuario = document.getElementById("usuario");
    let $contraseña = document.getElementById("contraseña");
    let $sexo = document.getElementById("sexo");
    let $formulario = document.getElementById("formRegister");

    if(debug) {
        console.log("input nombre: " + $nombre + " el valor que tiene es de " + $nombre.value);
        console.log("input apellidos: " + $apellidos + " el valor que tiene es de " + $apellidos.value);
        console.log("input edad: " + $edad + " el valor que tiene es de " + $edad.value);
        console.log("input domicilio: " + $domicilio + " el valor que tiene es de " + $domicilio.value);
        console.log("input usuario: " + $usuario + " el valor que tiene es de " + $usuario.value);
        console.log("input contraseña: " + $contraseña + " el valor que tiene es de " + $contraseña.value);
        console.log("select sexo: " + $sexo + "el valor que tiene es de " + $sexo.value);
    }

    let nombreUsuario = $nombre.value;
    let apellidosUsuario = $apellidos.value;
    let edadUsuario = $edad.value;
    let sexoUsuario = $sexo.value;
    let domicilioUsuario = $domicilio.value;
    let usuario = $usuario.value;
    let contraseña  = $contraseña.value; 

    

    if(validar(nombreUsuario, apellidosUsuario, edadUsuario, sexoUsuario, usuario, contraseña)) {
            // Recoger los datos del formulario
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
       
    }
}