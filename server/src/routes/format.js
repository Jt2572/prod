const { Router } = require('express')

const {
    getAll,
    create

  } = require('../controllers/format.js')

const router = Router()

router.get('/', getAll)
router.post('/', create)

module.exports = router