const { Format } = require('../db.js')

const getAll = async (req, res, next) => {
  try {
    const formatos = await Format.findAll()
    if (!formatos.length > 0)
      return res.status(404).json({ msg: 'No hay contenido aún' })
    res.status(200).json({ formatos })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const format = await Format.findByPk(id)
    if (!format) return res.status(404).json({ msg: 'Formato no encontrado' })
    res.status(200).json({ format })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const { name } = req.body
  try {
    if (!name)
      return res.status(400).json({ msg: 'Formato provisto' })

    const format = await Format.create(req.body)
    if (!format)
      return res.status(200).json({ msg: 'No se pudo crear el formato' })
    res.status(201).json({ msg: 'Formato creado', format })
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  const { id } = req.params
  const { nombre } = req.body
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const formato = await Format.findByPk(id)
    if (!formato) return res.status(404).json({ msg: 'Formato no encontrado' })
    const updatedFormato = await formato.update({
      nombre: nombre || formato.nombre,
    })

    if (!updatedFormato)
      return res.status(200).json({ msg: 'No se pudo actualizar el formato' })
    res
      .status(200)
      .json({ msg: 'Formato actualizado', formato: updatedFormato })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ msg: 'Id no provisto' })
    const formato = await Format.findByPk(id)
    if (!formato)
      return res.status(404).json({ msg: 'Contenido no encontrado' })
    const deleteFormato = await formato.destroy()
    if (!deleteFormato)
      return res.status(200).json({ msg: 'No se pudo eliminar el contenido' })
    res.status(200).json({ msg: 'Contenido eliminado', formato })
  } catch (error) {
    next(error)
  }
}

const createBulk = async (req, res, next) => {
  const { formatos } = req.body
  try {
    if (!formatos.length > 0)
      return res.status(400).json({ msg: 'Formatos no provista' })
    const newFormatos = await Format.bulkCreate(formatos)
    if (!newFormatos.length > 0)
      return res.status(200).json({ msg: 'No se pudo crear los formatos' })
    res.status(201).json({ count: newFormatos.length, formatos: newFormatos })
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
}