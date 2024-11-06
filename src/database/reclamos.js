import { conexion } from "./conexion.js";

export default class Reclamos{

    buscarTodos = async () => {
        let sql = `
            SELECT 
                r.idReclamo, 
                r.asunto, 
                r.descripcion, 
                r.fechaCreado, 
                r.fechaFinalizado, 
                r.fechaCancelado, 
                r.idReclamoEstado, 
                re.descripcion AS "Descripción Estado", 
                r.idReclamoTipo, 
                rt.descripcion AS "Descripción Tipo", 
                u.nombre AS "Creado por"
            FROM reclamos AS r
            INNER JOIN reclamosTipo AS rt ON rt.idReclamoTipo = r.idReclamoTipo
            INNER JOIN reclamosEstado AS re ON re.idReclamoEstado = r.idReclamoEstado
            INNER JOIN usuarios AS u ON u.idUsuario = r.idUsuarioCreador 
             `;
    
        const [result] = await conexion.query(sql);
        return result;
    };

    buscarPorId = async (idReclamo) => {
        const sql = `SELECT 
                        r.idReclamo,
                        r.asunto,
                        r.descripcion,
                        r.fechaCreado,
                        r.fechaFinalizado,
                        r.fechaCancelado,
                        r.idReclamoEstado,
                        re.descripcion AS estadoDescripcion,
                        r.idReclamoTipo,
                        rt.descripcion AS tipoDescripcion,
                        r.idUsuarioCreador,
                        uc.nombre AS creadorNombre,
                        uc.apellido AS creadorApellido,
                        uc.correoElectronico AS creadorEmail,
                        r.idUsuarioFinalizador,
                        uf.nombre AS finalizadorNombre,
                        uf.apellido AS finalizadorApellido,
                        uf.correoElectronico AS finalizadorEmail
                    FROM reclamos AS r
                    INNER JOIN reclamosEstado AS re ON r.idReclamoEstado = re.idReclamoEstado
                    INNER JOIN reclamosTipo AS rt ON r.idReclamoTipo = rt.idReclamoTipo
                    LEFT JOIN usuarios AS uc ON r.idUsuarioCreador = uc.idUsuario
                    LEFT JOIN usuarios AS uf ON r.idUsuarioFinalizador = uf.idUsuario
                    WHERE r.idReclamo = ?;`;
        const [result] = await conexion.query(sql, [idReclamo]);
        return (result.length > 0) ? result[0] : null;
    }
    
    sePuedeCancelar = async (idReclamo) => {
        
        // idReclamoEstado 3 y 4 no se pueden cancelar 3 = Cancelado y 4 = Finalizado
        const sql = `SELECT * FROM reclamos WHERE idReclamo = ? 
        AND idReclamoEstado = 1 
        AND idReclamoEstado !=3
        AND idReclamoEstado !=4 ` ;
        const [result] = await conexion.query(sql, [idReclamo]);
        return (result.length > 0) ? result[0] : null;
    }

    
    crear = async ({asunto, idReclamoTipo, idUsuarioCreador}) => {

        const sql = `INSERT INTO reclamos (asunto, fechaCreado, idReclamoTipo, idReclamoEstado, idUsuarioCreador)
                    VALUES (?, NOW(), ?, 1, ?)`;
        const [result] = await conexion.query(sql, [asunto, idReclamoTipo, idUsuarioCreador]);

        if (result.affectedRows === 0) {
            return false;
        }
        
        return this.buscarPorId(result.insertId);
    }

    modificar = async (idReclamo, datos) => {
        const sql = 'UPDATE reclamos SET ? WHERE idReclamo = ?';
        const [result] = await conexion.query(sql, [datos, idReclamo]);
        
        if (result.affectedRows === 0) {
            return false;
        }
        
        return true;
    }

    buscarInformacionClientePorReclamo = async (idReclamo) => {
        const sql = `SELECT CONCAT(u.apellido, ', ', u.nombre) AS cliente, u.correoElectronico, rt.descripcion AS estado 
                        FROM reclamos AS r 
                        INNER JOIN usuarios AS u ON u.idUsuario = r.idUsuarioCreador 
                        INNER JOIN reclamosEstado AS rt ON rt.idReclamoEstado = r.idReclamoEstado
                        WHERE r.idReclamo = ?;`;
        const [result] = await conexion.query(sql, [idReclamo]);

        return result;
    }

    buscarDatosReportePdf = async () => {        
        const sql = 'CALL `datosPDF`()`(@p0, @p1, @p2, @p3, @p4);';

        const [result] = await conexion.query(sql);

        console.log(result);
        const datosReporte = {
            reclamosTotales : result[0][0].reclamosTotales,
            reclamosNoFinalizados : result[1][0].reclamosNoFinalizados,
            reclamosFinalizados : result[2][0].reclamosFinalizados,
            descripcionTipoRreclamoFrecuente : result[3][0].descripcionTipoRreclamoFrecuente,
            cantidadTipoRreclamoFrecuente : result[3][0].cantidadTipoRreclamoFrecuente
        }

        return datosReporte;
    }

    buscarDatosReporteCsv = async () => {
        const sql = `SELECT r.idReclamo as 'reclamo', rt.descripcion as 'tipo', re.descripcion AS 'estado',
                     DATE_FORMAT(r.fechaCreado, '%Y-%m-%d %H:%i:%s') AS 'fechaCreado', CONCAT(u.nombre, ' ', u.apellido) AS 'cliente'
                    FROM reclamos AS r 
                    INNER JOIN reclamosTipo AS rt ON rt.idReclamoTipo = r.idReclamoTipo 
                    INNER JOIN reclamosEstado AS re ON re.idReclamoEstado = r.idReclamoEstado 
                    INNER JOIN usuarios AS u ON u.idUsuario = r.idUsuarioCreador 
                        WHERE r.idReclamoEstado <> 4;`;

        const [result] = await conexion.query(sql);
        return result;
    }
}