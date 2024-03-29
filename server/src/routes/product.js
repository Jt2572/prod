const { Router } = require('express')

const {

  getById,
  create,
  createBulk,
  updateById,
  deleteById,
  getAllRemasterizado,
} = require('../controllers/product.js')

const router = Router()

router.get('/', getAllRemasterizado)
router.get('/:id', getById)
router.post('/', create)
router.post('/bulk', createBulk)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

module.exports = router
