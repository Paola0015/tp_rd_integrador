import { conexion } from "./conexion.js";

export default class UsuariosTipo{
    
    buscarTodos = async () =>{
        const sql = 'SELECT * FROM usuariosTipo;';
        const [result] = await conexion.query(sql);
        return result;
    };

    
}