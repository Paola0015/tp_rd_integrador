import { DataTypes } from 'sequelize';
import sequelize from '../../database/database.js'; /

export const Oficina = sequelize.define('Oficina', {


  nombre: {
    type: DataTypes.STRING,
    allowNull: false,


  },

  aplleido: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  usuarios: {
    type: DataTypes.JSON, 
    allowNull: true,
  },

  direccion:{
    type: DateTypes.STRING,
    allowNull: false,

  },

  telefono:{
    type: DataTypes.STRING,
    allowNull: false,

  }
  
});
