import { conexion } from "./conexion.js";

export default class ReclamosTipo{
    
    buscarTodos = async ()=>{
        const sql = 'SELECT * FROM reclamosTipo WHERE activo = 1';
        const [result] = await conexion.query(sql);
        return result;
    };

    buscarPorId = async (idReclamoTipo)=>{
        const sql = `SELECT * FROM reclamosTipo WHERE activo = 1 AND idReclamoTipo = ?`;
        const [result] = await conexion.query(sql, [idReclamoTipo]);
        return (result.length > 0) ? result[0] : null;
    };

    actualizarReclamosTipo = async (idReclamoTipo, datosActualizados)=>{
        const sql = `UPDATE reclamosTipo SET
         descripcion = COALESCE(?, descripcion),
         activo = COALESCE(?, activo)
         WHERE idReclamoTipo = ? AND activo = 1`;
         try{
            const [result] = await  conexion.query(sql, [
                datosActualizados.descripcion,
                datosActualizados.activo,
                idReclamoTipo 
            ]);
            if (result.affectedRows === 0) {
                throw new Error('Tipo de reclamo no encontrado o no se puede actualizar');
            }
            return { mensaje: 'Tipo de reclamo actualizado correctamente' };

         }catch(error){
            console.error("Error al intentar actualizar el tipo de reclamo:", error);
            throw new Error('Error al actualizar el tipo de reclamo');
         }
    };
   
    crearReclamoTipo = async (nuevoReclamoTipo) => {
        const sql = `INSERT INTO reclamosTipo (descripcion, activo) VALUES (?, 1)`;
    
        try {
            const [result] = await conexion.query(sql, [
                nuevoReclamoTipo.descripcion,
                nuevoReclamoTipo.activo 
            ]);
    
            return { idReclamoTipo: result.insertId, mensaje: 'Tipo de reclamo creado correctamente' };
        } catch (error) {
            console.error("Error al intentar crear el tipo de reclamo:", error);
            throw new Error('Error al crear el tipo de reclamo');
        }
    };

    borrarReclamoTipo = async(idReclamoTipo) => {
        const sql = `UPDATE reclamosTipo SET activo = 0 WHERE idReclamoTipo = ? AND activo = 1`;
        try {
            const [result] = await conexion.query(sql, [idReclamoTipo]);
    
            if (result.affectedRows === 0) {
                throw new Error('Tipo de reclamo no encontrado o ya está inactivo');
            }
    
            return { mensaje: 'Tipo de reclamo eliminado con exito' };
        } catch (error) {
            console.error("Error al intentar eliminar lógicamente el tipo de reclamo:", error);
            throw new Error('Error al eliminar el tipo de reclamo');
        }
    };

}