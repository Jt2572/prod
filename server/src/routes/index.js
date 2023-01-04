const { Router } = require("express");

const product = require('./product.js')
const categoria = require('./categoria.js')
const format = require('./format.js')

const router = Router();

// Configurar los routers
router.use('/products', product);
router.use('/categorias', categoria)
router.use('/format', format)
module.exports = router;
