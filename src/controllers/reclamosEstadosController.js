import ReclamosEstadosService from "../services/reclamosEstadosService.js";

export default class ReclamosEstadosController{

    constructor(){
        this.service = new ReclamosEstadosService();
    }
  
    buscarTodos = async (req, res) => {
        try{
            const reclamosEstados = await this.service.buscarTodos();
            res.status(200).send(reclamosEstados)
        }catch (error){
            console.log(error);
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    }

    buscarPoId = async (req, res) =>{
        try{
            const idReclamoEstado = req.params.id;
            const reclamoEstado = await this.service.buscarPorId(idReclamoEstado);
            console.log(reclamoEstado);

            if(!reclamoEstado){
                return res.status(404).send({mensaje: 'Tipo de estado de reclamo no encontrado'});
            }
            res.status(200).send(reclamoEstado);
        }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
            }
    }
    
    crear = async (req,res) =>{
        try {
            const nuevoEstadoReclamo = req.body;
    
            if (!nuevoEstadoReclamo.descripcion) {
                return res.status(400).send({ mensaje: 'La descripción es obligatoria' });
            }
    
            console.log("Datos recibidos para crear estado de reclamo:", nuevoEstadoReclamo);
    
            const resultado = await this.service.crear(nuevoEstadoReclamo);
    
            return res.status(201).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar crear el tipo de usuario:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };
    
    actualizar = async (req, res) => {
        try {
            const idReclamoEstado = req.params.id; 
            const datosActualizados = req.body;
    
            console.log("Datos recibidos para actualizar el estado de reclamo:", datosActualizados);
    
            const resultado = await this.service.modificar(idReclamoEstado, datosActualizados);
            console.log(resultado);
            
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar actualizar el estado del reclamo:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    borrar = async (req,res) =>{
        try {
            const idReclamoEstado = req.params.id; 
    
            const resultado = await this.service.borrar(idReclamoEstado);
    
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar eliminar el tipo de estado de reclamo:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    }

}