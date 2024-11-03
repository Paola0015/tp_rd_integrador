import { conexion } from "./conexion.js";

export default class UsuariosOficinas {

    buscarTodos = async () => {
        const sql = `SELECT 
                        uo.idUsuarioOficina,
                        u.nombre AS nombreUsuario,
                        o.nombre AS nombreOficina,
                        uo.activo
                    FROM 
                        usuariosOficinas uo
                    INNER JOIN 
                        usuarios u ON uo.idUsuario = u.idUsuario
                    INNER JOIN 
                        oficinas o ON uo.idOficina = o.idOficina
                    WHERE 
                        uo.activo = 1 ;`
        const [result] = await conexion.query(sql);
        return result;
    };

    buscarPorId = async (idUsuarioOficina) => {
        const sql = `SELECT 
                        uo.idUsuarioOficina,
                        u.nombre AS nombreUsuario,
                        o.nombre AS nombreOficina,
                        uo.activo
                    FROM 
                         usuariosOficinas uo
                    INNER JOIN 
                        usuarios u ON uo.idUsuario = u.idUsuario
                    INNER JOIN 
                        oficinas o ON uo.idOficina = o.idOficina
                    WHERE 
                        uo.idUsuarioOficina = ? AND uo.activo = 1;`;
        const [result] = await conexion.query(sql, [idUsuarioOficina]);
        return (result.length > 0) ? result[0] : null;
    };

    borrarUsuarioOficina = async (idUsuarioOficina) => {
        const sql = `UPDATE usuariosOficinas SET activo = 0 WHERE idUsuarioOficina = ?`;
        try{
            const [result] = await conexion.query(sql, [idUsuarioOficina]);
        if(result.affectedRows > 0){
            return {mesanje: 'Usuario Oficina desactivado con exito'};
        }else{
            return {mensaje: 'Usuario Oficina no encontrado o ya desactivado'};
        }

        }catch (error) {
            console.error("Error al borrar usuario Oficina:", error);
            throw error;
        }
       };

       crearUsuarioOficina = async (nuevoUsuarioOficina) => {
        const sql = `INSERT INTO usuariosOficinas (idUsuario, idOficina, activo) VALUES (?,?, 1)`;
    
        try {
            const [result] = await conexion.query(sql, [
                nuevoUsuarioOficina.idUsuario,
                nuevoUsuarioOficina.idOficina,
                nuevoUsuarioOficina.activo
            ]);
    
            return { idReclamoTipo: result.insertId, mensaje: 'Usuario de oficina creado correctamente' };
        } catch (error) {
            console.error("Error al intentar crear el usuario de oficina:", error);
            throw new Error('Error al crear el usuario de oficina');
        }
    };
    actualizarUsuarioOficina = async (idUsuarioOficina, datosActualizados) => {
        const sql = `UPDATE usuariosOficinas SET 
            idOficina = COALESCE(?, idOficina),
            activo = COALESCE(?, activo)
            WHERE idUsuarioOficina = ? AND activo = 1`;
        
        try {
            const [result] = await conexion.query(sql, [
                datosActualizados.idOficina,
                datosActualizados.activo,
                idUsuarioOficina
            ]);
               
            if (result.affectedRows === 0) {
                throw new Error('Usuario de oficina no encontrado o no se puede actualizar');
            }
    
            return { mensaje: 'Usuario de oficina  actualizado correctamente' };
        } catch (error) {
            console.error("Error al intentar actualizar el usuario de oficina:", error);
            throw new Error('Error al actualizar el tipo de usuario');
        }
    };



}