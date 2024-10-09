import Usuarios from "../database/usuarios.js";

export default class UsuariosService {
    constructor(){
        this.usuarios = new Usuarios(); 
    }

    buscarTodos = () => {
        return this.usuarios.buscarTodos();
    }
}