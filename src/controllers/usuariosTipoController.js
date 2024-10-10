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

    
}