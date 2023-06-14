// const camisetas_de_futbol = require('../data/camisetas_de_futbol')
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Usuarios = db.Usuario;

const usersController = {
  login: function (req, res) {
    if (req.session.user) {
      res.redirect('/')
    } else {
      res.render('login');
    }
  },
  loginProcess: function (req, res) {
    if (req.body.email.length < 3) {
      res.send('El email debe tener al menos 3 caracteres')
    }

    if (req.body.contrasenia.length < 3) {
      res.send('La contraseña debe tener al menos 3 caracteres')
    }

    Usuarios.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function (usuario) {
        if (usuario) {
          if (bcrypt.compareSync(req.body.contrasenia, usuario.contrasenia)) {
            req.session.user = usuario
            res.redirect('/')
          } else {
            res.send('Contraseña incorrecta')
          }
        } else {
          res.send("El email no existe")
        }
      })
      .catch(function (error) {
        res.send(error)
      })

  },
  register: function (req, res) {
    if (req.session.user) {
      res.redirect('/')
    } else {
      res.render('register');
    }
  },
  registerProcess: function (req, res) {
    if (req.body.email.length < 3) {
      res.send('El email debe tener al menos 3 caracteres')
    }

    if (req.body.usuario.length < 3) {
      res.send('El nombre de usuario debe tener al menos 3 caracteres')
    }

    if (req.body.contrasenia.length < 3) {
      res.send('La contraseña debe tener al menos 3 caracteres')
    }

    if (req.body.dni.length > 8 || req.body.dni.length < 7) {
      res.send('El DNI debe tener entre 7 y 8 caracteres')
    }

    Usuarios.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function (usr) {
        if (!usr) {
          Usuarios.findOne({
            where: {
              usuario: req.body.usuario
            }
          })
            .then(function (usr) {
              if (!usr) {
                Usuarios.create({
                  email: req.body.email,
                  usuario: req.body.usuario,
                  contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                  dni: req.body.dni,
                  foto: 'default-image.png',
                  fecha_de_nacimiento: req.body.fecha_de_nacimiento
                })
                  .then(function (resultado) {
                    res.redirect('/users/login')
                  })
                  .catch(function (error) {
                    res.send(error)
                  })
              } else {
                res.send('El nombre de usuario ya existe')
              }
            })
            .catch(function (error) {
              res.send(error)
            })
        } else {
          res.send('El email ya existe')
        }
      })
      .catch(function (error) {
        res.send(error)
      })
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
          res.render('profile', { usuario: usuario });
        } else {
          res.send("No se encontró el usuario")
        }
      })
  },
  profileEdit: function (req, res) {
    if (req.session.user) {
      res.render('profileEdit');
    } else {
      res.redirect('/users/login')
    }
  },
  profileEditProcess: function(req, res) {
    if (req.body.email.length < 3) {
      res.send('El email debe tener al menos 3 caracteres')
    }

    if (req.body.usuario.length < 3) {
      res.send('El nombre de usuario debe tener al menos 3 caracteres')
    }

    if (req.body.contrasenia.length < 3) {
      res.send('La contraseña debe tener al menos 3 caracteres')
    }

    if (req.body.dni.length > 8 || req.body.dni.length < 7) {
      res.send('El DNI debe tener entre 7 y 8 caracteres')
    }

    Usuarios.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function (usr) {
        if (!usr) {
          Usuarios.findOne({
            where: {
              usuario: req.body.usuario
            }
          })
            .then(function (usr) {
              if (!usr) {
                Usuarios.update({
                  email: req.body.email,
                  usuario: req.body.usuario,
                  contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                  dni: req.body.dni,
                  foto: 'default-image.png',
                  fecha_de_nacimiento: req.body.fecha_de_nacimiento
                })
                  .then(function (resultado) {
                    res.redirect('/users/login')
                  })
                  .catch(function (error) {
                    res.send(error)
                  })
              } else {
                res.send('El nombre de usuario ya existe')
              }
            })
            .catch(function (error) {
              res.send(error)
            })
        } else {
          res.send('El email ya existe')
        }
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  logout: function(req, res) {
    req.session.destroy()
    res.redirect('/users/login')
  }
};

module.exports = usersController;