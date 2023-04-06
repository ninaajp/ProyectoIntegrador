const express = require('express');
const router = express.Router();
let productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/product', productosController.product);
router.get('/productAdd', productosController.productAdd);


module.exports = router;