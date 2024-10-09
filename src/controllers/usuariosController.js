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
        }
}