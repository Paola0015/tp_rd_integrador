import ReclamosService from "../services/reclamosService.js";

export default class ReclamosController {

    constructor() {
        this.service = new ReclamosService();
    }

    // Buscar los reclamos
    buscarTodos = async (req, res) => {
        try {
            const reclamos = await this.service.buscarTodos();
            if (reclamos.length === 0) {
                return res.status(404).send({
                    estado: "Falla",
                    mensaje: "No se encontraron reclamos."
                });
            }
            res.status(200).send({
                estado: "OK",
                data: reclamos
            });
        } catch (error) {
            console.error("Error al buscar reclamos:", error);
            res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en el servidor.",
                error: error.message
            });
        }
    }

    // Creo un nuevo reclamo
    crear = async (req, res) => {
        const { asunto, idReclamoTipo, idUsuarioCreador } = req.body;

        // Validar los datos 
        if (!asunto || !idReclamoTipo || !idUsuarioCreador) {
            return res.status(400).send({
                estado: "Falla",
                mensaje: "Faltan datos obligatorios. Los campos 'asunto', 'idReclamoTipo' y 'idUsuarioCreador' son necesarios."
            });
        }

        try {
            const reclamo = {
                asunto,
                idReclamoTipo,
                idUsuarioCreador,
                idReclamoEstado: 1 /
            };

            const nuevoReclamo = await this.service.crear(reclamo);

            res.status(201).send({
                estado: "OK",
                data: nuevoReclamo
            });
        } catch (error) {
            console.error("Error al crear el reclamo:", error);
            res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en el servidor.",
                error: error.message
            });
        }
    }
}
