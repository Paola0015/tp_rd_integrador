import UsuariosTipo from "../database/usuariosTipo.js";

export default class UsuariosTipoService{
    constructor(){
        this.usuariosTipo = new UsuariosTipo();

    }
    buscarTodos = () =>{
        return this.usuariosTipo.buscarTodos();
    }

    buscarPorId = (idUsuarioTipo) => {
        return this.usuariosTipo.buscarPorId(idUsuarioTipo);
    }

    actualizarUsuariosTipo = (idUsuarioTipo, datosActualizados) => {
        return this.usuariosTipo.actualizarUsuariosTipo(idUsuarioTipo,datosActualizados);
    }

    crearUsuarioTipo = (nuevoUsuarioTipo) =>{
        return this.usuariosTipo.crearUsuarioTipo(nuevoUsuarioTipo);
    }

    borrarUsuarioTipo = (idUsuarioTipo) =>{
        return this.usuariosTipo.borrarUsuarioTipo(idUsuarioTipo);
    }
}
