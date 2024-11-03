import ReclamosTipo from "../database/reclamosTipo.js";

export default class ReclamosTipoService {
    constructor () {
        this.reclamosTipo = new ReclamosTipo();
    };

    buscarTodos = ()=>{
        return this.reclamosTipo.buscarTodos();
    };

    buscarPorId = (idReclamotipo)=>{
        return this.reclamosTipo.buscarPorId(idReclamotipo);
    };

    actualizarReclamosTipo =(idReclamoTipo, datosActualizados)=>{
        return this.reclamosTipo.actualizarReclamosTipo(idReclamoTipo,datosActualizados);
    };

    crearReclamoTipo = (nuevoReclamoTipo)=>{
        return this.reclamosTipo.crearReclamoTipo(nuevoReclamoTipo);
    }

    borrarReclamoTipo = (idReclamoTipo)=>{
        return this.reclamosTipo.borrarReclamoTipo(idReclamoTipo);
    }



}