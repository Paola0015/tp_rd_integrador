import { conexion } from "./conexion.js";

export default class Usuarios{

    buscarTodos = async () => {
        const sql = 'SELECT * FROM usuarios;';
        const [result] = await conexion.query(sql);
        return result;
    }

    buscarActivos = async () => {
        const sql = 'SELECT * FROM usuarios WHERE activo = 1;';
        const [result] = await conexion.query(sql);
        return result;
    }

    buscarInactivos = async () => {
        const sql = 'SELECT * FROM usuarios WHERE activo = 0;';
        const [result] = await conexion.query(sql);
        return result;
    }
    
    buscarPorId = async (idUsuario) => {
        const sql = `SELECT * FROM usuarios WHERE activo = 1 AND idUsuario = ?`;
        const [result] = await conexion.query(sql, [idUsuario]);
        return (result.length > 0) ? result[0] : null;
    }
    
}