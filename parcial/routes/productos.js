const express = require('express');
const router = express.Router();
let productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/detalle/:id', productosController.product); // http://localhost:3000/productos/detalle/1
router.get('/productAdd', productosController.productAdd); // http://localhost:3000/productos/productAdd


module.exports = router;