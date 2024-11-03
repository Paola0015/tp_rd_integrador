 import UsuariosOficinas from "../database/usuariosOficinas.js";

 export default class UsuariosOficinasService {

    constructor (){
        this.usuariosOficinas = new UsuariosOficinas();
    }

    buscarTodos = ()=>{
        return this.usuariosOficinas.buscarTodos();
    };

    buscarPorId = (idUsuarioOficina)=>{
        return this.usuariosOficinas.buscarPorId(idUsuarioOficina);
    };

    borrarUsuarioOficina = (idUsuarioOficina)=>{
        return this.usuariosOficinas.borrarUsuarioOficina(idUsuarioOficina);
    };

    crearUsuarioOfina = (nuevoUsuarioOficina)=>{
        return this.usuariosOficinas.crearUsuarioOficina(nuevoUsuarioOficina);
    };

    actualizarUsuarioOficiona = (idUsuarioOficina, datosActualizados) =>{
        return this.usuariosOficinas.actualizarUsuarioOficina(idUsuarioOficina, datosActualizados);
    };
 }