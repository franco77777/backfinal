const { Router } = require("express")
require("dotenv").config()
const {
  getPaises,
  getPais,
  postActivity,
  getContador,
  putContador,
} = require("./countryroute")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

router.get("/countries", getPaises)
router.get("/countries/:id", getPais)
router.post("/activity", postActivity)
router.get("/contador", getContador)
router.put("/contador/:id", putContador)

//router.use("/countries", paises)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
