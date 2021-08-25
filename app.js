const express = require("express")
const rutasUser = require('./routes/user.js')
const rutasMain = require('./routes/main.js')
const rutasInscribite = require('./routes/inscribite.js')
const rutasProductos = require('./routes/tienda.js')

const app = express()
const path = require ("path")

app.use(express.static("public"))

app.set("view engine", "ejs")

app.listen(2004, () => {
    console.log("puerto tenis")
})

app.use('/user', rutasUser);
app.use('/', rutasMain);
app.use('/inscribite', rutasInscribite);
app.use('/tienda', rutasProductos)

app.get("/", (req, res) => {
    res.render("home.ejs") 
})
    