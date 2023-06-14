// const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const db = require('../database/models');
const Productos = db.Producto;
const Comentarios = db.Comentario;

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
    if (req.session.user) {
      res.render('productAdd');
    } else {
      res.redirect('/users/login')
    }
  },
  productAddSave: function (req, res) {

    if (req.body.nombre.length < 3) {
      res.send('El nombre debe tener al menos 3 caracteres')
    }
    
    if (req.body.descripcion.length < 3) {
      res.send('El nombre debe tener al menos 3 caracteres')
    }

    let producto = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: '/images/products/default-image.png',
      FkUserId: req.session.user.id
    }

    Productos.create(producto)
      .then(function(resultado) {
        res.redirect('/productos/detalle/' + resultado.id)
      })
      .catch(function(error) {
        res.send(error)
      })
  },
  comentar: function(req, res) {
    if (!req.session.user) {
      return res.send("El usuario no está logueado, no puede comentar")
    }

    let idPosteo = req.params.id
    let idUsuario = req.session.user.id
    let comentario = req.body.comentario

    Comentarios.create({
      texto: comentario,
      FkUserId: idUsuario,
      FkProductosId : idPosteo
    })
      .then(function(respuesta) {
        res.redirect('/productos/detalle/' + idPosteo)
      })
      .catch(function(error) {
        res.send(error)
      })
  }
};

module.exports = productosController;