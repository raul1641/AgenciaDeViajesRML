export const paginaReserva = async (req, res) => {
    try {
        res.render('reserva', {
            titulo: 'Reserva de Viajes',
            exito: req.query.exito,
            error: req.query.error
        });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
};