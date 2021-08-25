const express = require("express")
const router = express.Router();
const inscribiteControllers = require ('../controllers/inscribiteControllers')

router.get('/clases', inscribiteControllers.clases)
router.get('/torneos', inscribiteControllers.torneos)

module.exports = router;