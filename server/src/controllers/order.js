const { Op } = require('sequelize')

const { Order, Product, User } = require('../conexion/db.js')

const getAll = async (req, res, next) => {
  const { name } = req.query
  try {
    let where = null
    if (name) where = { name: { [Op.iLike]: "%" + name + "%" } }
    
// console.log('name ',name)

    const orders = await Order.findAndCountAll({
      include: [
        {
          attributes: ['id', 'name', 'price'],
          model: Product,
          as: 'ProductOrders',
          where,   
          through: {
            attributes: ['cantidad'],
          },
        },
      ],
      distinct: true,
    })
    if (!orders.rows.length > 0)
      return res.status(404).json({ msg: 'No hay pedidos' })
    res.status(200).json({ count: orders.count, pedidos: orders.rows })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const order = await Order.findOne({
      include: [
        {
          attributes: ['id', 'name', 'price'],
          model: Product,
          as: 'ProductOrders',
          through: {
            attributes: ['cantidad'],
          },
        },
      ],
      where: {
        id,
      },
    })
    if (!order) return res.status(404).json({ msg: 'Pedido no encontrado' })
    res.status(200).json({ order })
  } catch (error) {
    next(error)
  }
}



const getByUser = async (req, res, next) => {
  const { userId } = req.params
  try {
    if (!userId)
      return res.status(400).json({ msg: 'Id usuario no provisto' })
    const user = await User.findByPk(userId)
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' })
    const orders = await user.getPedidos({
      include: [
        {
          attributes: ['id', 'name', 'price'],
          model: Product,
          as: 'ProductOrders',
          through: {
            attributes: ['cantidad'],
          },
        },
      ],
    })

    const count = await usuario.countPedidos()

    if (!orders.length > 0)
      return res
        .status(404)
        .json({ msg: 'No existe pedidos para este usuario' })
    res.status(200).json({ count, orders })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const {
    address,
    state,
    products, 
    UserId,
  } = req.body
  try {
    if (!UserId)
      return res.status(400).json({ msg: 'Id usuario no provisto' })
    if (!address)
      return res.status(400).json({ msg: 'Dirección de Envio no provista' })
    if (!state) return res.status(400).json({ msg: 'Estado no provisto' })
    if (!products.length > 0)
      return res.status(400).json({ msg: 'productos no provistos' })

    const order = await Order.create(req.body)

    if (!order)
      return res.status(200).json({ msg: 'No se pudo crear el pedido' })

    if (products.length > 0) {
      products.forEach(async ({ id, cantidad }) => {
        const product = await Product.findByPk(id)
        order.addProductOrders(product, { through: { cantidad } })
      })
    }

    res.status(201).json({ msg: 'Pedido creado', order })
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  const { id } = req.params
  const { address, state, deliverydate } = req.body
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })

    const order = await Order.findByPk(id)
    if (!order) return res.status(404).json({ msg: 'Pedido no encontrado' })

    const orderUpdate = await order.update({
      address: address || order.address,
      state: state || order.state,      
      deliverydate: deliverydate || order.deliverydate,
    })

    if (!orderUpdate)
      return res.status(200).json({ msg: 'No se pudo actualizar el pedido' })

    res.status(200).json({ msg: 'Pedido actualizado', pedido: orderUpdate })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const order = await Order.findByPk(id)
    if (!order) return res.status(404).json({ msg: 'Pedido no encontrado' })
    const orderDelete = await order.destroy()
    if (!orderDelete)
      return res.status(200).json({ msg: 'No se pudo eliminar el pedido' })
    res.status(200).json({ msg: 'Pedido eliminado', order })
  } catch (error) {
    next(error)
  }
}

const createBulk = async (req, res, next) => {
  const { orders } = req.body
  try {
    if (!orders.length > 0)
      return res.status(400).json({ msg: 'Pedidos no provistos' })
    const newPedidos = await Order.bulkCreate(orders)
    if (!newPedidos.length > 0)
      return res.status(200).json({ msg: 'No se pudo crear los pedidos' })
    res.status(201).json({ count: newPedidos.length, pedidos: newPedidos })
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
  getByUser,
 
}
