

const indexController = {
    home: function(req, res) {
        res.render('index');
      },
    busqueda: function(req, res) {
      res.render('busqueda');
    }
};

module.exports = indexController;