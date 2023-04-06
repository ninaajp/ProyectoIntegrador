

const productosController = {
    product: function(req, res) {
        res.render('product');
      },
    productAdd: function(req, res) {
        res.render('productAdd');
      }
};

module.exports = productosController;