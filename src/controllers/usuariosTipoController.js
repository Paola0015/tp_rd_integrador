import res from "express/lib/response.js";
import UsuariosTipoService from "../services/usuariosTipoService.js"

export default class UsuariosTipoController{
    constructor(){
        this.service = new UsuariosTipoService();
    }

    buscarTodos = async (req, res) =>{
        try{ 
            const usuariosTipo = await this.service.buscarTodos();
            res.status(200).send(usuariosTipo);
        }catch(error){
            res.status(500).send({
                estado:"Falla", mensaje: "Error interno en servidor."
            });
        }
    };

    buscarPoId = async (req, res) =>{
        try{
            const idUsuarioTipo = req.params.id;
            const usuarioTipo = await this.service.buscarPorId(idUsuarioTipo);
            console.log(usuarioTipo);

            if(!usuarioTipo){
                return res.status(404).send({mensaje: 'Tipo de usuario no encontrado'});
            }
            res.status(200).send(usuarioTipo);
        }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
            }
    }

    actualizarUsuariosTipo = async (req, res) => {
        try {
            const idUsuariosTipo = req.params.id; 
            const datosActualizados = req.body;
    
            console.log("Datos recibidos para actualizar el tipo de usuario:", datosActualizados);
    
            const resultado = await this.service.actualizarUsuariosTipo(idUsuariosTipo, datosActualizados);
            console.log(resultado);
            
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar actualizar el tipo de usuario:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    };

    crearUsuarioTipo = async (req,res) =>{
        try {
            const nuevoTipoUsuario = req.body;
    
            if (!nuevoTipoUsuario.descripcion) {
                return res.status(400).send({ mensaje: 'La descripción es obligatoria' });
            }
    
            console.log("Datos recibidos para crear tipo de usuario:", nuevoTipoUsuario);
    
            const resultado = await this.service.crearUsuarioTipo(nuevoTipoUsuario);
    
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

    borrarUsuarioTipo = async (req,res) =>{
        try {
            const idUsuariosTipo = req.params.id; 
    
            const resultado = await this.service.borrarUsuarioTipo(idUsuariosTipo);
    
            return res.status(200).send(resultado);
    
        } catch (error) {
            console.error("Error al intentar eliminar el tipo de usuario:", error);
            return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });
        }
    }


}