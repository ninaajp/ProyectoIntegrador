
const usersController = {
  login: function(req, res) {
      res.render('login');
    },
  register: function(req, res) {
      res.render('register');
    },
  profile: function(req, res) {
    console.log(data.usuarios);
      res.render('profile', {data: data.usuarios});
    },
  profileEdit: function(req, res) {
      res.render('profileEdit');
    }
};

module.exports = usersController;