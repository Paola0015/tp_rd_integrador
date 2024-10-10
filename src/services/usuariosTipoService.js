import UsuariosTipo from "../database/usuariosTipo.js";

export default class UsuariosTipoService{
    constructor(){
        this.usuariosTipo = new UsuariosTipo();

    }
    buscarTodos = () =>{
        return this.usuariosTipo.buscarTodos();
    
    }

    
}
