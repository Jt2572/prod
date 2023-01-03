const { Router } = require('express')

const {
    getAll
  } = require('../controllers/product.js')

const router = Router()

router.get('/', getAll)

module.exports = router