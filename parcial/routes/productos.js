const express = require('express');
const router = express.Router();
let productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/productAdd', productosController.productAdd); // http://localhost:3000/productos/productAdd

router.post('/productAdd', productosController.productAddSave); // http://localhost:3000/productos/productAdd
router.post('/comentar/:id', productosController.comentar);

router.get('/detalle/:id', productosController.product); // http://localhost:3000/productos/detalle/1

module.exports = router;