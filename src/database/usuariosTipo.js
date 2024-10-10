import { conexion } from "./conexion.js";

export default class UsuariosTipo{
    
    buscarTodos = async () =>{
        const sql = 'SELECT * FROM usuariosTipo;';
        const [result] = await conexion.query(sql);
        return result;
    };
    buscarPorId = async (idUsuarioTipo) => {
        const sql = `SELECT * FROM usuariosTipo  WHERE activo = 1 AND idUsuario = ?`;
        const [result] = await conexion.query(sql, [idUsuario]);
        return (result.length > 0) ? result[0] : null;
    }
    
}