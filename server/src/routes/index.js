const { Router } = require("express");

const product = require('./product.js')

const router = Router();

// Configurar los routers
router.use('/products', product)
module.exports = router;
