const { Op } = require('sequelize')

const { User, Product, Format } = require('../db.js')

const getAll = async (req, res) => {
    try {
        const products = await Product.findAll({

            include: {
                model: Format,
                attributes: ["name"],
                as: 'ProductFormat',
                through: {
                    attributes: [],
                },
            },

        });
        res.json(products)
    } catch (error) {
        console.log(error)
    }
}

const create = async (req, res) => {
    const { format } = req.body;




    try {

        let formats = await Format.findAll()

        if (!formats.length) {
            console.log('empty')

            var formatLito = Format.create({
                name: "Litografia",
            });

            var formatDigital = Format.create({
                name: "Digital",

            });

            Promise.all([formatLito, formatDigital])
                .then(res => {
                    console.log("Formatos precargados");
                });

        } else {
            console.log('formats')

        }




        const newProduct = await Product.create(req.body)
        if (!newProduct) return res.status(200).json({ msg: 'fail' })


        newProduct.addProductFormat(format)

        res.status(201).json({ msg: 'Producto creado', newProduct })


    } catch (error) {
        console.log(error)
    }



}

module.exports = {
    getAll,
    create
}