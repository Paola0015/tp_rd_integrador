import Usuarios from "../database/usuarios.js";

export default class UsuariosService {
    constructor(){
        this.usuarios = new Usuarios(); 
    }

    buscarTodos = () => {
        return this.usuarios.buscarTodos();
    }
    
    buscarActivos = () => {
        return this.usuarios.buscarActivos();
    }

    buscarPorId = (idUsuario) => {
        return this.usuarios.buscarPorId(idUsuario);
    }

    borrarUsuario = (idUsuario) => {
        return this.usuarios.borrarPorId(idUsuario);
    }

    crearUsuario = (nuevoUsuario) => {
        return this.usuarios.crearUsuario(nuevoUsuario);
    }

    actualizarUsuario = (idUsuario, datosActualizados) =>{
        return this.usuarios.actualizarUsuario(idUsuario, datosActualizados);
    }

    //accesos y validacion

    buscar = (correoElectronico, contrasenia)=>{
        return this.usuarios.buscar(correoElectronico,contrasenia);

    }

}