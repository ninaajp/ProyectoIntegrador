// Requerir la lista de productos
// const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const db = require('../database/models');
const Productos = db.Producto;
const Op = db.Sequelize.Op;

const indexController = {
  home: function (req, res) {
    // Enviar la lista de productos a la vista
    Productos.findAll({
      include: [
        { association: 'producto_usuario' },
        { association: 'producto_comentario', include: ['comentario_usuario']}
      ],
      order: [
        ['updatedAt', 'DESC']
      ]
    })
      .then(function (productos) {
        res.render('index', { camisetas_de_futbol: productos });
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  busqueda: function (req, res) {
    let busqueda = req.query.search
    Productos.findAll({
      where: {
        nombre: {
          [Op.like]: `%${busqueda}%`
        }
      },
      include: [
        { association: 'producto_usuario' },
        { association: 'producto_comentario', include: ['comentario_usuario']}
      ],
    })
    .then(function (productos) {
      res.render('busqueda', { camisetas_de_futbol: productos });
    })
    .catch(function(error){
      res.send(error)
    })
  }
};

module.exports = indexController;