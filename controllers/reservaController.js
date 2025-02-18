import Reserva from "../models/Reserva.js";

// Función para crear reserva
export const crearReserva = async (req, res) => {
    const { nombre, destino, fecha } = req.body;
    try {
        await Reserva.create({
            nombre: nombre.trim(),
            destino: destino.trim(),
            fecha
        });
        res.redirect('/reserva?exito=1');
    } catch (error) {
        console.error('Error al crear reserva:', error);
        res.redirect('/reserva?error=1');
    }
};

// Función para obtener reservas
export const obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            order: [['fecha', 'ASC']],
            raw: true
        });
        res.render('reservas', {
            titulo: 'Listado de Reservas',
            reservas
        });
    } catch (error) {
        console.error('Error al obtener reservas:', error);
        res.status(500).send("Error al obtener las reservas");
    }
};