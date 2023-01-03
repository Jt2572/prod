const { Op } = require('sequelize')

const { User, Product } = require('../db.js')

const getAll = async (req,res) => {
    try {
        
        res.json('products')
    } catch (error) {
        
    }
}

module.exports = {
    getAll
}