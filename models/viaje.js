import Sequelize from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define("viaje", {
    titulo:{
        type: Sequelize.STRING
    },

    precio: {
      type: Sequelize.STRING
    },

    fecha_ida: {
        type: Sequelize.DATE
    },

    fecha_vuelta: {
        type: Sequelize.DATE
    },

    imagen: {
        type: Sequelize.STRING
    },

    descripcion: {
        type: Sequelize.TEXT  // Cambiado de STRING a TEXT
    },
    disponibles: {
        type: Sequelize.INTEGER  // Cambiado a INTEGER (si almacena cantidades)
    },

    slug: {
        type: Sequelize.STRING
    },
});
Viaje.sync({alter:true}).catch(console.error);