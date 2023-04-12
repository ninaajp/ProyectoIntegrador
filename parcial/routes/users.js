var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profile/:id', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);

//como se cual ruta hacer parametrizada
module.exports = router;

