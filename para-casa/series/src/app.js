const express = require('express')

const seriesRoutes = require('./router/seriesRoutes')

const app = express()

app.use(express.json())

app.use('/catalogo', seriesRoutes)

module.exports = app