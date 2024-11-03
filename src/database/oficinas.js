import { conexion } from "./conexion.js";

export default class Oficinas{

    buscarTodos = async () => {
        const sql = `SELECT 
                        o.idOficina,
                        o.nombre AS nombreOficina,
                        o.activo,
                        rt.descripcion AS tipoReclamo
                    FROM 
                        oficinas o
                    INNER JOIN 
                        reclamosTipo rt ON o.idReclamoTipo = rt.idReclamoTipo
                    WHERE 
                        o.activo = 1;`;
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
       };

       actualizarOficina = async (idOficina, datosActualizados) => {
        const sql = `UPDATE oficinas SET 
            nombre = COALESCE(?, nombre),
            idReclamoTipo = COALESCE(?, idReclamoTipo)
            WHERE idOficina = ? AND activo = 1`;
        
        try {
            const [result] = await conexion.query(sql, [
                datosActualizados.nombre,
                datosActualizados.idReclamoTipo, 
                idOficina
            ]);
    
            if (result.affectedRows === 0) {
                throw new Error('Oficina no encontrada o no se puede actualizar');
            }
    
            return { mensaje: 'Oficina actualizada correctamente' };
        } catch (error) {
            console.error("Error al intentar actualizar la oficina:", error);
            throw new Error('Error al actualizar la oficina');
        }
    };
    
}