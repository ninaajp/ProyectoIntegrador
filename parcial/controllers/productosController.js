// const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const db = require('../database/models');
const Productos = db.Producto;

const productosController = {
  product: function (req, res) {
    let id = req.params.id;
    
    Productos.findByPk(id, {
      include: [
        { association: 'producto_usuario' },
        { association: 'producto_comentario', include: ['comentario_usuario']}
      ]
    })
    .then(function (producto) {
      if (producto) {
        // res.send(producto)
        res.render('product', {producto: producto});
      } else {
        res.send('No se encontró el producto');
      }
    })
    .catch(function (error) {
      res.send(error)
    })

  },
  productAdd: function (req, res) {
    res.render('productAdd');
  }
};

module.exports = productosController;