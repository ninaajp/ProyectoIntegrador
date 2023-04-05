const express = require('express');
const router = express.Router();
let productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/producto', productosController.producto);
router.get('/addProducto', productosController.addProducto);


module.exports = router;