const express = require("express")
const router = express.Router();
const tiendaControllers = require ('../controllers/tiendaControllers')

router.get('/productos', tiendaControllers.productos)
router.get('/productosDetalle', tiendaControllers.productosdetalle)

module.exports = router;