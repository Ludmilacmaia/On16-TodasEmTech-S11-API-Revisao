const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')



router.get("/series", controller.getAllSeries)
router.get("/series/genero", controller.getByGenre) 
router.get("/series/buscar/:id", controller.getById)
router.post("/series", controller.createSerie)
router.delete("/delete/:id", controller.deleteById)
router.patch("/update/:id/liked", controller.updateLiked)


module.exports = router