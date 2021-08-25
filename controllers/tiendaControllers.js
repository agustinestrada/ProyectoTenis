const tiendaControllers = {
productos: (req, res) => {
 res.render('productos')
},

productosdetalle: (req, res) => {
     res.render('productosdetalle')
},

}

module.exports = tiendaControllers