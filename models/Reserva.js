import Sequelize from "sequelize";
import db from "../config/db.js";

const Reserva = db.define("reservas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destino: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATEONLY,  // Cambiado a DATEONLY para solo fecha
        allowNull: false
    }
});

// Sincronización segura
const sincronizarModelo = async () => {
    try {
        await Reserva.sync({ alter: true });
        console.log('Modelo Reserva sincronizado');
    } catch (error) {
        console.error('Error al sincronizar modelo:', error);
    }
};

sincronizarModelo();

export default Reserva;