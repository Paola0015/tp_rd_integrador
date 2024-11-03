import ReclamosEstados from "../database/reclamosEstados.js";

export default class ReclamosEstadosService {

    constructor(){
        this.reclamosEstados = new ReclamosEstados();
    }

    buscarTodos = () => {
        return this.reclamosEstados.buscarTodos();
    }

    buscarPorId = (idReclamoEstado) => {
        return this.reclamosEstados.buscarPorId(idReclamoEstado);
     }
    
    crear = (reclamoEstado) => {
        return this.reclamosEstados.crear(reclamoEstado);
    }

     modificar = (idReclamoEstado, datosActualizados) => {
        return this.reclamosEstados.actualizarReclamoEstado(idReclamoEstado,datosActualizados);
     }

     borrar = (idReclamoEstado) =>{
        return this.reclamosEstados.borrar(idReclamoEstado);
     }

     crear = (descripcion) =>{
        return this.reclamosEstados.crear(descripcion);
     }
}