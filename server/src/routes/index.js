const { Router } = require('express')
const product = require('./product.js')
const order = require('./order')
const user = require('./user')
const format = require('./format')
const auth = require('./auth')
const checkout = require('./checkout')

const router = Router()

router.use('/auth', auth)
router.use('/products', product)
router.use('/orders', order)
router.use('/users', user)
router.use('/formats', format)

router.use('/checkout', checkout)


module.exports = router
