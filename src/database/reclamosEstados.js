import { conexion } from "./conexion.js";

export default class ReclamosEstados{

    buscarTodos = async () => {
        const sql = 'SELECT * FROM reclamosEstado WHERE activo = 1;';
        const [result] = await conexion.query(sql);
        // res.status(200).json(result);
        return result
    }

    buscarPorId = async (idReclamoEstado) => {

        const sql = `SELECT * FROM reclamosEstado WHERE activo = 1 AND idReclamoEstado = ?`;
        const [result] = await conexion.query(sql, [idReclamoEstado]);
        
        return (result.length > 0) ? result[0] : null;
    }

    crear = async (nuevoEstado) => {
        const sql = `INSERT INTO reclamosEstado (descripcion, activo) VALUES (?, 1)`;
    
        try {
            const [result] = await conexion.query(sql, [
                nuevoEstado.descripcion,
                nuevoEstado.activo 
            ]);
    
            return { idReclamoEstdo: result.insertId, mensaje: 'Tipo de reclamo creado correctamente' };
        } catch (error) {
            console.error("Error al intentar crear el tipo de reclamo:", error);
            throw new Error('Error al crear el tipo de reclamo');
        }
    };

    actualizarReclamoEstado = async (idReclamoEstado, datosActualizados) => {
        const sql = `UPDATE reclamosEstado SET 
            descripcion = COALESCE(?, descripcion),
            activo = COALESCE(?, activo)
            WHERE idReclamoEstado = ? AND activo = 1`; 
        
        try {
            const [result] = await conexion.query(sql, [
                datosActualizados.descripcion,
                datosActualizados.activo,
                idReclamoEstado
            ]);
    
            if (result.affectedRows === 0) {
                throw new Error('Tipo de reclamo no encontrado o no se puede actualizar');
            }
    
            return { mensaje: 'Tipo de reclamo actualizado correctamente' };
        } catch (error) {
            console.error("Error al intentar actualizar el tipo de reclamo:", error);
            throw new Error('Error al actualizar el estado del reclamo');
        }
    };

    borrar = async(idReclamosEstado) => {
        const sql = `UPDATE reclamosEstado SET activo = 0 WHERE idReclamoEstado = ? AND activo = 1`;
        try {
            const [result] = await conexion.query(sql, [idReclamosEstado]);
    
            if (result.affectedRows === 0) {
                throw new Error('Tipo de Estado de reclamo no encontrado o ya está inactivo');
            }
    
            return { mensaje: 'Tipo de estado de reclamo eliminado con exito' };
        } catch (error) {
            console.error("Error al intentar eliminar lógicamente el estado de reclamo:", error);
            throw new Error('Error al eliminar el tipo estado dee reclamo');
        }
    }
}