const { Op } = require('sequelize')
const { User } = require('../conexion/db')

const { validarUsuario } = require('../middlewares/authMiddleware')

const getAll = async (req, res, next) => {
  const { nickname } = req.query
  try {
    if (nickname) {
      const users = await User.findAndCountAll({
        where: {
          nickname: {
            [Op.iLike]: `%${nickname}%`,
          },
        },
      })
      if (!users.rows.length > 0)
        return res.status(404).json({ msg: 'Usuarios no encontrados' })
      return res
        .status(200)
        .json({ count: users.count, usuarios: users.rows })
    }

    const user = await User.findAndCountAll()
    if (!user.rows.length > 0)
      return res.status(404).json({ msg: 'Usuarios no encontrados' })
    res.status(200).json({ count: user.count, usuarios: user.rows })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' })
    res.status(200).json({ user })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const {
    email,
    nickname,
    name, 
    picture,
    sub,
  } = req.body
  try {
    
    if (!email)
      return res.status(400).json({ msg: 'Email de usuario no provisto' })
    if (!nickname)
      return res.status(400).json({ msg: 'Nickname de usuario no provisto' })

    const [user, created] = await User.findOrCreate({
      where: {
        email: email,
        nickname: nickname,
      },
      defaults: {
        email,
        name,
        picture,
        nickname,
        platform: sub,
      },
    })

    if (!created)
      return res.status(200).json({ msg: 'Usuario encontrado ', user })

    res.status(201).json({ msg: 'Usuario creado', user })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  const { id } = req.params
  const {
    email,
    nickname,
    platform,
    password,
    rol,
    phone,
    picture,
    name,
    address,
    isBan,
  } = req.body

  console.log(id, req.body)

  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' })

    const userUpdate = await user.update({
      email: email || user.email,
      nickname: nickname || user.nickname,
      platform: platform || user.platform,
      rol: rol || user.rol,
      password: password || user.password,
      phone: phone || user.phone,
      picture: picture || user.picture,
      name: name || user.name,      
      address: address || user.address,
      isBan: isBan || usuario.isBan,
    })

    if (!userUpdate)
      return res.status(200).json({ msg: 'No se pudo actualizar el usuario' })
    res
      .status(200)
      .json({ msg: 'Usuario actualizado', usuario: userUpdate })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ msg: 'Usuario no encotrado' })
    const userDelete = await user.destroy()
    if (!userDelete)
      return res.status(400).json({ msg: 'No se pudo eliminar usuario' })
    res.status(200).json({ msg: 'Usuario eliminado', user })
  } catch (error) {
    next(error)
  }
}

const createBulk = async (req, res, next) => {
  const { users } = req.body
  try {
    if (!users.length > 0)
      return res.status(400).json({ msg: 'Lista de usuarios no provistas' })
    const newUsers = await User.bulkCreate(users)
    if (!newUsers)
      return res
        .status(400)
        .json({ msg: 'No se pudo crear la lista de usuarios' })

    count = newUsers.length
    res.status(201).json({ count, usuarios: newUsers })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  createBulk,
  deleteById,
}
