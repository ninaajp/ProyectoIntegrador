var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/busqueda', indexController.busqueda);


module.exports = router;
// no