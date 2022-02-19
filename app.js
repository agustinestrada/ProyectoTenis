const express = require("express")
const app = express()

//librerias
const bcrypt = require('bcryptjs')
const cookie = require('cookie-parser')
const session = require('express-session')
const validator = require('express-validator')



// Modularizacion de Rutas
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const servicesRoutes = require('./routes/servicesRoutes')
const mainRoutes = require('./routes/mainRoutes')

// APP.USE

app.use(session({
    secret:'sh! es secreto',
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static("public"))

app.set("view engine", "ejs")

app.listen(2004, () => {
    console.log("puerto tenis")
})

app.use('/productos', productRoutes)
app.use('/user', userRoutes)
app.use('/services', servicesRoutes)
app.use('/', mainRoutes)
