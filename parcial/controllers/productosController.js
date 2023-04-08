const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const usuarios = require('../data/usuarios')
const comentarios = require('../data/comentarios')

const productosController = {
    product: function(req, res) {
      let id = req.params.id;
      let producto = camisetas_de_futbol.find(producto => producto.id == id);
      let usuario = usuarios.find(usuario => usuario.id == producto.id_vendedor);
      let comentariosProducto = [];
      for (let i = 0; i < producto.ids_comentarios.length; i++) {
        let comentario = comentarios.find(comentario => comentario.id == producto.ids_comentarios[i]);
        comentariosProducto.push(comentario);
      }
      let comentariosProducto_mas_usuario = [];
      for (let i = 0; i < comentariosProducto.length; i++) {
        let usuario = usuarios.find(usuario => usuario.id == comentariosProducto[i].id_usuario);
        comentariosProducto_mas_usuario.push({comentario: comentariosProducto[i], usuario: usuario});
      }
      res.render('product', {producto: producto, usuario: usuario, comentarios: comentariosProducto_mas_usuario});
      },
    productAdd: function(req, res) {
        res.render('productAdd');
      }
};

module.exports = productosController;