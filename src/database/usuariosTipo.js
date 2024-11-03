import { conexion } from "./conexion.js";

export default class UsuariosTipo{
    
    buscarTodos = async () =>{
        const sql = 'SELECT * FROM usuariosTipo;';
        const [result] = await conexion.query(sql);
        return result;
    };

    buscarPorId = async (idUsuarioTipo) => {
        const sql = `SELECT * FROM usuariosTipo  WHERE activo = 1 AND idUsuarioTipo = ?`;
        const [result] = await conexion.query(sql, [idUsuarioTipo]);
        return (result.length > 0) ? result[0] : null;
    }
    
    actualizarUsuariosTipo = async (idUsuariosTipo, datosActualizados) => {
        const sql = `UPDATE usuariosTipo SET 
            descripcion = COALESCE(?, descripcion),
            activo = COALESCE(?, activo)
            WHERE idUsuarioTipo = ? AND activo = 1`; 
        
        try {
            const [result] = await conexion.query(sql, [
                datosActualizados.descripcion,
                datosActualizados.activo,
                idUsuariosTipo
            ]);
    
            if (result.affectedRows === 0) {
                throw new Error('Tipo de usuario no encontrado o no se puede actualizar');
            }
    
            return { mensaje: 'Tipo de usuario actualizado correctamente' };
        } catch (error) {
            console.error("Error al intentar actualizar el tipo de usuario:", error);
            throw new Error('Error al actualizar el tipo de usuario');
        }
    };
    
    crearUsuarioTipo = async (nuevoTipoUsuario) => {
        const sql = `INSERT INTO usuariosTipo (descripcion, activo) VALUES (?, 1)`;
    
        try {
            const [result] = await conexion.query(sql, [
                nuevoTipoUsuario.descripcion,
                nuevoTipoUsuario.activo 
            ]);
    
            return { idUsuariosTipo: result.insertId, mensaje: 'Tipo de usuario creado correctamente' };
        } catch (error) {
            console.error("Error al intentar crear el tipo de usuario:", error);
            throw new Error('Error al crear el tipo de usuario');
        }
    };

    borrarUsuarioTipo = async(idUsuarioTipo) => {
        const sql = `UPDATE usuariosTipo SET activo = 0 WHERE idUsuarioTipo = ? AND activo = 1`;
        try {
            const [result] = await conexion.query(sql, [idUsuarioTipo]);
    
            if (result.affectedRows === 0) {
                throw new Error('Tipo de usuario no encontrado o ya está inactivo');
            }
    
            return { mensaje: 'Tipo de usuario eliminado con exito' };
        } catch (error) {
            console.error("Error al intentar eliminar lógicamente el tipo de usuario:", error);
            throw new Error('Error al eliminar el tipo de usuario');
        }
    }
}