// Requerir la lista de productos
const camisetas_de_futbol = require('../data/camisetas_de_futbol')

const indexController = {
    home: function(req, res) {
        // Enviar la lista de productos a la vista
        res.render('index', {camisetas_de_futbol: camisetas_de_futbol});
      },
    busqueda: function(req, res) {
      res.render('busqueda');
    }
};

module.exports = indexController;