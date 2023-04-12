const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const usuarios = require('../data/usuarios')
const comentarios = require('../data/comentarios')

const productosController = {
  product: function (req, res) {
    let id = req.params.id;
    let producto = {};
    for (let i = 0; i < camisetas_de_futbol.length; i++) {
      if (camisetas_de_futbol[i].id == id) {
        producto = camisetas_de_futbol[i];
      }
    }

    res.render('product', {producto: producto});
  },
  productAdd: function (req, res) {
    res.render('productAdd');
  }
};

module.exports = productosController;