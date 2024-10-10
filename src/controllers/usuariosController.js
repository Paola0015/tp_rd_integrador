import UsuariosService from "../services/usuariosService.js";

export default class UsuariosController {
    constructor(){
        this.service = new UsuariosService();
    }

        buscarTodos = async (req, res) =>{
            try{ 
                const usuarios = await this.service.buscarTodos();
                res.status(200).send(usuarios);
            }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
            }
        };

        buscarActivos = async (req, res) => {
            try{
                const usuarios = await this.service.buscarActivos();
                res.status(200).send(usuarios);

            }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
            }
        };

        buscarPorId = async (req, res) => {
            try{
                const idUsuario = req.params.id;
                const usuario = await this.service.buscarPorId(idUsuario);

                if(!usuario){
                    return res.status(404).send({mensaje:'Usuario no encontrado'})
                }
                res.status(200).send(usuario)

            }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
            }
        };

        borrarUsuario = async (req, res) => {
            try{
                const idUsuario = req.params.id;
                const usuario = await this.service.borrarUsuario(idUsuario);

                if(!usuario){
                    return res.status(404).send({mensaje: 'Usuario no encontrado'})
                }
                res.status(200).send(true)

            }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor."
                });
        }
        };

        crearUsuario = async (req, res) => {
            try{
                const nuevoUsuario = req.body;
                if (!nuevoUsuario.nombre || !nuevoUsuario.apellido || !nuevoUsuario.correoElectronico || !nuevoUsuario.contrasenia || !nuevoUsuario.idTipoUsuario) {
                    return res.status(400).send({ mensaje: 'Faltan datos obligatorios' });
                }


                console.log("Datos recibidos para crear usuario:", nuevoUsuario);
                const result = await  this.service.crearUsuario(nuevoUsuario);
                console.log(result);
                return res.status(201).send(result);

            }catch(error){
                res.status(500).send({
                    estado:"Falla", mensaje: "Error interno en servidor.",
                    error: error.message 
                });
        }  
            };

        actualizarUsuario = async (req, res) =>{
            try{
                const idUsuario = req.params.id;
                const datosActualizados = req.body;

                const result = await this.service.actualizarUsuario(idUsuario, datosActualizados);
                return res.status(200).send(result);

            }catch(error){
                console.error("Error al intentar actualizar el usuario:", error);
                return res.status(500).send({
                estado: "Falla",
                mensaje: "Error interno en servidor.",
                error: error.message
            });

            }
        }    
}