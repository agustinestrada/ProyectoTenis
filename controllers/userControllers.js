const userControllers = {
    login: (req, res) => {
        res.render("login")
},

    register:(req, res) => {
        res.render("register")
        },

contacto:(req, res) => {
    res.render("contacto")
    },

}

module.exports = userControllers