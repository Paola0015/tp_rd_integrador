import Usuarios from "../database/usuarios";

export default class UsuariosService {
    constructor(){
        this.usuarios = new Usuarios(); 
    }

    buscarTodos = () => {
        return this.usuarios.buscarTodos();
    }
}