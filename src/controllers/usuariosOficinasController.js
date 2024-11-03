import UsuariosOficinas from "../services/usuariosOficinasService.js";

export default class UsuariosOficinasController {
    constructor (){
        this.service = new UsuariosOficinas(); 
    };
    
    buscarTodos = async (req, res) =>{
        try{ 
            const usuariosOficinas = await this.service.buscarTodos();
            res.status(200).send(usuariosOficinas);
        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    };

    buscarPorId = async (req, res) => {
        try{
            const idUsuarioOficina = req.params.id;
            const usuario = await this.service.buscarPorId(idUsuarioOficina);
            if(!usuario){
                return res.status(404).send({mensaje:'Usuario de oficina no encontrado'})
            }
            res.status(200).send(usuario)

        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    };
    borrarUsuarioOficina = async (req,res) =>{
        try {
            const idUsuarioOficina = req.params.id; 
    
            const resultado = await this.service.borrarUsuarioOficina(idUsuarioOficina);
    
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar eliminar el usuario de oficina:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    crearUsuarioOficina = async (req,res) =>{
        try {
            const nuevoUsuarioOficina = req.body;
    
            if (!nuevoUsuarioOficina.idUsuario) { 
                return res.status(400).send({ mensaje: 'El id de usuario es obligatorio' });
            };
            if (!nuevoUsuarioOficina.idOficina) {
                return res.status(400).send({ mensaje: 'El id de oficina es obligatorio' });
            }
    
            console.log("Datos recibidos para crear el usuario de oficina:", nuevoUsuarioOficina);
    
            const resultado = await this.service.crearUsuarioOfina(nuevoUsuarioOficina);
    
            return res.status(201).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar crear el usuario de oficina:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    actualizarUsuarioOficina = async (req, res) => {
        try {
            const idUsuarioOficina = req.params.id; 
            const datosActualizados = req.body;
    
            console.log("Datos recibidos para actualizar el usuario de oficina:", idUsuarioOficina,datosActualizados);
    
            const resultado = await this.service.actualizarUsuarioOficiona(idUsuarioOficina, datosActualizados);
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



