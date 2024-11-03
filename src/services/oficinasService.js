import Oficinas from "../database/oficinas.js";

export default class OficinasService{
    constructor(){
        this.oficinas = new Oficinas();
    }
    buscarTodos = () => {
        return this.oficinas.buscarTodos();
    };

    buscarPorId = (idOficina) => {
        return this.oficinas.buscarPorId(idOficina);
    };

    boarraOficina = (idOficina) => {
        return this.oficinas.borrarOficina(idOficina);
    };

    crearOficina = (nuevaOficina) => {
        return this.oficinas.crearOficina(nuevaOficina);
    };

    actualizarOficina = (idOficina, datosActualizados)=>{
        return this.oficinas.actualizarOficina(idOficina, datosActualizados);
    };


}