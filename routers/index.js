import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViajes,
    guardarTestimonios,
    paginaReserva,
    paginaReservaConViaje  // Importación añadida
} from "../controllers/paginaController.js";
import { crearReserva, obtenerReservas } from "../controllers/reservaController.js";

const router = express.Router();

// Rutas principales
router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimonios", paginaTestimonios);
router.get("/viajes/:slug", paginaDetalleViajes);

// Reservas
router.get("/reserva", paginaReserva);
router.post("/reserva", crearReserva);
router.get("/reservas", obtenerReservas);
router.get("/viajes/:slug/reservar", paginaReservaConViaje);  // Nueva ruta

// Testimonios
router.post("/testimonios", guardarTestimonios);

export default router;