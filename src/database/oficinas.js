import { conexion } from "./conexion.js";

export default class Oficinas{

    buscarTodos = async () => {
        const sql = 'SELECT * FROM oficinas;';
        const [result] = await conexion.query(sql);
        return result;
    }

    buscarPorId = async (idOficina) => {
        const sql = `SELECT * FROM oficinas WHERE activo = 1 AND idOficina = ?`;
        const [result] = await conexion.query(sql, [idOficina]);
        return (result.length > 0) ? result[0] : null;
    };

    borrarOficina = async (idOficina) =>{
        const sql = `UPDATE oficinas SET activo = 0 WHERE idOficina = ?`;
        try{
            const [result] = await conexion.query(sql, [idOficina]);
        if(result.affectedRows > 0){
            return {mesanje: 'Oficina borrada con exito'};
        }else{
            return {mensaje: 'Oficina no encontrada o ya desactivada'};
        }

        }catch (error) {
            console.error("Error al borrar oficina:", error);
            throw error;
        }
       };

       crearOficina = async (nuevaOficina) => {
          
        const sql = `INSERT INTO oficinas (nombre, idReclamoTipo, activo )
                     VALUES (?, ?, 1)`;

        try{
            const {nombre, idReclamoTipo} = nuevaOficina;
            const [result] = await conexion.query(sql, [nombre, idReclamoTipo ]);

            return { idOficina: result.insertId, mensaje: 'Oficina creada correctamente' };

        }catch (error) {
            console.error("Error al intentar crear el usuario:", error);
            throw error;
       }
       }
    
}