const data = require("../data/usuarios")
const usersController = {
  login: function(req, res) {
      res.render('login');
    },
  register: function(req, res) {
      res.render('register');
    },
  profile: function(req, res) {
    console.log(data);
      res.render('profile', {data: data});
    },
  profileEdit: function(req, res) {
      res.render('profileEdit');
    }
};

module.exports = usersController;