import OfinasService from "../services/oficinasService.js";

export default class Oficinas{

    constructor(){
        this.service = new OfinasService();
    }
    buscarTodos = async (req, res) =>{
        try{ 
            const usuarios = await this.service.buscarTodos();
            res.status(200).send(usuarios);
        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: 
                "Error interno en servidor."
            });
        }
    };

    buscarPorId = async (req, res) =>{
        try{
            const idOficina = req.params.id;
            const oficina = await this.service.buscarPorId(idOficina);
            res.status(200).send(oficina)

        }catch(error){
            res.status(500).send({
                estado:"Falla", 
                mensaje: "Error interno en servidor."
            });
        }
    };
    borrarOficina = async (req, res) =>{
        try {
            const idOficina = req.params.id; 
    
            const resultado = await this.service.boarraOficina(idOficina);
    
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar eliminar el tipo de usuario:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    crearOficina = async (req, res) => {
        try{
            const nuevaOficina = req.body;
            if (!nuevaOficina.nombre || !nuevaOficina.idReclamoTipo) {
                return res.status(400).send({ mensaje: 'Faltan datos obligatorios' });
            }


            console.log("Datos recibidos para crear usuario:", nuevaOficina);
            const result = await  this.service.crearOficina(nuevaOficina);
            console.log(result);
            return res.status(201).send(result);

        }catch(error){
            res.status(500).send({
                estado:"Falla",
                 mensaje: "Error interno en servidor.",
                error: error.message 
            });
    }  
        };
        
        actualizarOficina = async (req, res) => {
            try {
                const idOficina = req.params.id; 
                const datosActualizados = req.body;
        
                console.log("Datos recibidos para actualizar el usuario de oficina:", idOficina,datosActualizados);
        
                const resultado = await this.service.actualizarOficina(idOficina, datosActualizados);
                console.log(resultado);
                
                return res.status(200).send(resultado);
        
            } catch (error) {
                console.error("Error al intentar actualizar el usuario de oficina :", error);
                return res.status(500).send({
                    estado: "Falla",
                    mensaje: "Error interno en servidor.",
                    error: error.message
                });
            }
        };

       
}