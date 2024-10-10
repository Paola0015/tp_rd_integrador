Tp integrador Programación III 2024
INSTALACION: 
  1. Clonar el repo
  2. Dentro de la carpeta clonada "npm install"

Iniciar el servidor: 
  npm run start

Iniciar el servidor en modo developer:
  npm run dev  


*** Endpoint ***
Usuarios

Buscar todos: http://localhost:3000/v1/usuarios

Resspuesta:

    {
        "idUsuario": 1,
        "nombre": "Daenerys",
        "apellido": "Targaryen",
        "correoElectronico": "daetar@correo.com",
        "contrasenia": "b2803ace294160fd87aa85f826fa8df0c39e77282e0217af680198cef8d9edc3",
        "idTipoUsuario": 1,
        "imagen": null,
        "activo": 1
    } ......

Buscar por Id: http://localhost:3000/v1/usuarios/:id (ejemplo: http://localhost:3000/v1/usuarios/1)

Respuesta:

  {
      "idUsuario": 1,
      "nombre": "Daenerys",
      "apellido": "Targaryen",
      "correoElectronico": "daetar@correo.com",
      "contrasenia": "b2803ace294160fd87aa85f826fa8df0c39e77282e0217af680198cef8d9edc3",
      "idTipoUsuario": 1,
      "imagen": null,
      "activo": 1
  }

  
Actualizar usuario: http://localhost:3000/v1/usuarios/:id (ejempplo: http://localhost:3000/v1/usuarios/13)
ejemplo de body:
{
  "nombre":"Eddy"
}

respuesta: 
{
    "mensaje": "Usuario actualizado correctamente"
}








