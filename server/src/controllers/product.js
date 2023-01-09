const { Op } = require('sequelize')

const { Product, Format } = require('../conexion/db.js')

const getAll = async (req, res, next) => {
  const {
    carrito,
    search, 
    formatos,
    precios, 
    orden, 
    limite, 
    pagina, 
    buscarPor, 
  } = req.query

  let formatsIds = []
  let precio = null
  let ordenar = null

  let buscarBy = buscarPor || 'name'

  let whereFormatos = {}
  let order = null
  let limit = limite || Infinity
  let offset = pagina || 1
  let where = null

  try {
    if (carrito) {
      const where = carrito
        ? {
          id: {
            [Op.in]: JSON.parse(carrito),
          },
        }
        : null

      const productsToCar = await Product.findAll({
        where,
      })
      return res.status(200).json({ productsToCar })
    }


    if (formatos) {
      formatsIds = JSON.parse(formatos)
      whereFormatos = formatos
        ? {
          id: {
            [Op.in]: formatsIds,
          },
        }
        : null
    }

    if (search) {
      where = search
        ? { ...where, [buscarBy]: { [Op.iLike]: `%${search}%` } }
        : null
    }

    if (precios) {
      precio = JSON.parse(precios)
      where = precios
        ? {
          ...where,
          precio: {
            [Op.between]: [precio?.min ?? 0, precio?.max ?? Infinity],
          },
        }
        : null
    }

    if (orden) {
      ordenar = JSON.parse(orden)
      order = orden ? [[ordenar.valor, ordenar.dir]] : null
    }

    const allproducts = await Product.findAll({
      include: [
        {
          attributes: ['id', 'name'],
          model: Format,
          as: 'ProductFormat',
          where: whereFormatos,
          through: { attributes: [] },
        },
      ],
      where,
      orden,
    })

    let getProducts = []
    for (const product of allproducts) {
      const exist = await product.hasProductFormat(formatsIds)
      if (exist) {
        getProducts.push(product)
      }
    }

    const products = getProducts.slice(limit * (offset - 1), limit * offset)
    return res.status(200).json({
      count: getProducts.length,
      products,
    })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const product = await Product.findByPk(id, {
      include: [
        {
          attributes: ['id', 'name'],
          model: Format,
          as: 'ProductFormat',
          through: { attributes: [] },
        },
      ],
    })
    if (!product) return res.status(404).json({ msg: 'producto no encontrado' })
    res.status(200).json({ product })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const { name, price, format } =
    req.body
  try {
 
    if (!format.length > 0)
      return res.status(400).json({ msg: 'Formato no provisto' })
    if (!name) return res.status(400).json({ msg: 'Nombre de producto no provisto' }) 
    if (!price) return res.status(400).json({ msg: 'Precio no provisto' })

    const product = await Product.create(req.body)

    if (!product)
      return res.status(200).json({ msg: 'No se pudo crear el libro' })
    product.addProductFormat(format)

    res.status(201).json({ msg: 'Producto creado', product })
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  const { id } = req.params

  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })

    const product = await Product.findByPk(id, {
      include: [     
        {
          attributes: ['id', 'name'],
          model: Format,
          as: 'ProductFormat',
          through: {
            attributes: [],
          },
        },
      ],
    })
    if (!product) return res.status(404).json({ msg: 'Producto no encontrado' })
  
    const productUpdate = await product.update({
      name: req.body.name ?? product.name,
      price: req.body.price ?? product.price,
      isAvail: req.body.isAvail ?? product.isAvail,
      fechaPublicacion: req.body.fechaPublicacion ?? product.fechaPublicacion,
      paginas: req.body.paginas ?? product.paginas,
      image: req.body.image ?? product.image,
    })

    if (!productUpdate)
      return res.status(200).json({ msg: 'No se pudo actualizar el producto' })

    if (req.body.format) product.removeProductFormat(Format)

    product.addProductFormat(req.body.format)

    res.status(200).json({ msg: 'producto actualizado', product: productUpdate })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const product = await Product.findByPk(id)
    if (!product) return res.status(404).json({ msg: 'producto no encontrado' })
    const deleteproduct = await product.destroy()
    if (!deleteproduct)
      return res.status(200).json({ msg: 'No se pudo eliminar producto' })
    res.status(200).json({ product, msg: 'producto eliminado' })
  } catch (error) {
    next(error)
  }
}

const createBulk = async (req, res, next) => {
  const { products } = req.body

  const  [format]  = products
  console.log(products)
  console.log(format)

  try {
    if (!products) return res.status(400).json({ msg: 'Productos no provistos' })

    if (!format) return res.status(400).json({ msg: 'Formatos no provistos' })

    
    const newProducts = await Product.bulkCreate(products, {
      include: ['ProductFormat'],
    })
    const newFormats = await Format.bulkCreate(format)    

    newProducts.forEach((product) => {
      products.forEach((prod) => {
        if (product.name === prod.name) {
          
          prod.formatos.forEach((format) => {
            product.addProductFormat(format)
          })
        }
      })
    })

    res.status(201).json({
      products: newProducts,
      format: newFormats,
      msg: 'Productos creados',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  createBulk,
  getAllRemasterizado: getAll,
}
