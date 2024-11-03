import ReclamosTipo  from "../services/reclamosTipoService.js";

export default class ReclamosTipoController {
    constructor (){
        this.service = new ReclamosTipo();
    };

    buscarTodos = async (req, res) =>{
        try{ 
            const reclamosTipo = await this.service.buscarTodos();
            res.status(200).send(reclamosTipo);
        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    };

    buscarPorId = async (req, res) => {
        try{
            const idReclamoTipo = req.params.id;
            const reclamoTipo = await this.service.buscarPorId(idReclamoTipo);

            if(!reclamoTipo){
                return res.status(404).send({mensaje:'Tipo de reclamo no encontrado'})
            }
            res.status(200).send(reclamoTipo)

        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    };

    actualizarReclamoTipo = async (req, res) => {
        try {
            const idReclamoTipo = req.params.id; 
            const datosActualizados = req.body;
    
            console.log("Datos recibidos para actualizar el tipo de reclamo:", datosActualizados);
    
            const resultado = await this.service.actualizarReclamosTipo(idReclamoTipo, datosActualizados)
            console.log(resultado);
            
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar actualizar el tipo de reclamo:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    crearReclamoTipo = async (req,res) =>{
        try {
            const nuevoReclamoTipo = req.body;
    
            if (!nuevoReclamoTipo.descripcion) {
                return res.status(400).send({ mensaje: 'La descripción es obligatoria' });
            }
    
            console.log("Datos recibidos para crear tipo de reclamo:", nuevoReclamoTipo);
    
            const resultado = await this.service.crearReclamoTipo(nuevoReclamoTipo);
    
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

    borrarReclamoTipo = async (req,res) =>{
        try {
            const idReclamoTipo = req.params.id; 
    
            const resultado = await this.service.borrarReclamoTipo(idReclamoTipo);
    
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar eliminar el tipo de reclamo:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    }

}