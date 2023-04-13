const camisetas_de_futbol = require('../data/camisetas_de_futbol')

const usersController = {
  login: function (req, res) {
    res.render('login');
  },
  register: function (req, res) {
    res.render('register');
  },
  profile: function (req, res) {
    let id = req.params.id;
    
    let usuario = {}
    for (let i = 0; i < camisetas_de_futbol.length; i++) {
      if (camisetas_de_futbol[i].vendedor.id == id) {
        usuario = camisetas_de_futbol[i].vendedor;
      }
    }
    
    usuario.productos = [];

    for (let i = 0; i < camisetas_de_futbol.length; i++) {
      let prodcuto = {}
      if (camisetas_de_futbol[i].vendedor.id == id) {
        prodcuto.id = camisetas_de_futbol[i].id;
        prodcuto.nombre = camisetas_de_futbol[i].nombre;
        prodcuto.imagen = camisetas_de_futbol[i].imagen;
        prodcuto.descripcion = camisetas_de_futbol[i].descripcion;
        prodcuto.fecha_de_carga = camisetas_de_futbol[i].fecha_de_carga;
        prodcuto.comentarios = camisetas_de_futbol[i].comentarios;
        usuario.productos.push(prodcuto);
      }
    }

    // res.send(usuario)
    res.render('profile', {usuario : usuario});
  },
  profileEdit: function (req, res) {
    res.render('profileEdit');
  }
};

module.exports = usersController;