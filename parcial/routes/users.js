var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profileEdit', usersController.profileEdit);

router.post('/login', usersController.loginProcess);
router.post('/register', usersController.registerProcess);
router.post('/profileEdit', usersController.profileEditProcess);
router.post('/logout', usersController.logout);

//como se cual ruta hacer parametrizada
router.get('/profile/:id', usersController.profile);

module.exports = router;

