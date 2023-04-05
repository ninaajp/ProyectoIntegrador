

const productosController = {
    producto: function(req, res) {
        res.render('producto');
      },
    addProducto: function(req, res) {
        res.render('addProducto');
      }
};

module.exports = productosController;