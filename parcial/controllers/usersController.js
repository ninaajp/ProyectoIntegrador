// const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const db = require('../database/models');
const Usuarios = db.Usuario;

const usersController = {
  login: function (req, res) {
    res.render('login');
  },
  register: function (req, res) {
    res.render('register');
  },
  profile: function (req, res) {
    let id = req.params.id;
    
    Usuarios.findByPk(id, {
      include: [
        {
          association: 'usuario_producto',
          include: {
            association: 'producto_comentario',
            include: ['comentario_usuario']
          }
        },
      ]
    })
    .then(function (usuario) {
      if (usuario) {
        // res.send(usuario)
        res.render('profile', {usuario : usuario});
      } else {
        res.send("No se encontró el usuario")
      }
    })
  },
  profileEdit: function (req, res) {
    res.render('profileEdit');
  }
};

module.exports = usersController;