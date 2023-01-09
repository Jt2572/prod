const { Sequelize, DataTypes } = require('sequelize')
const fs = require('fs')
const dotenv = require('dotenv');
const path = require('path');
// const Order = require('../models/Order');
// const Product = require('../models/Product');


dotenv.config({ path: path.resolve(__dirname, '../../.env') })


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL } = process.env
// console.log(DB_NAME)
const sequelize = new Sequelize(
  DATABASE_URL
    ? `${DATABASE_URL}`
    : `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    ssl: process.env.PORT ? true : false,
    dialectOptions: process.env.PORT
      ? {
          ssl: { require: true, rejectUnauthorized: false },
        }
      : {},
  }
)
const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '../models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '../models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize))

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// const { User, Product, Format, Order, Categoria, Libro, Formato, Pedido, Tag, Usuario, Review } =
const { User, Product, Format, Order, Review } =
  sequelize.models

// Categoria N<=>M Libro
// Categoria.belongsToMany(Libro, {
//   through: 'Categoria_Libro',
//   as: 'CategoriaLibro',
// })
// Libro.belongsToMany(Categoria, {
//   through: 'Categoria_Libro',
//   as: 'CategoriaLibro',
// })

// Tag N<=>M Libro
// Tag.belongsToMany(Libro, { through: 'Tag_Libro', as: 'TagLibro' })
// Libro.belongsToMany(Tag, { through: 'Tag_Libro', as: 'TagLibro' })

// Pedido N<=>M Libro
// const Detalle = sequelize.define('Detalle', { cantidad: DataTypes.INTEGER })
// Pedido.belongsToMany(Libro, { through: Detalle, as: 'DetalleLibro' })
// Libro.belongsToMany(Pedido, { through: Detalle, as: 'DetalleLibro' })

// Usuario 1=>N Pedido
// Usuario.hasMany(Pedido)
// Pedido.belongsTo(Usuario)

// Usuario N<=>M Libro
// Usuario.belongsToMany(Libro, { through: Review, as: 'ReviewLibro' })
// Libro.belongsToMany(Usuario, { through: Review, as: 'ReviewLibro' })

//Usuario N<=>M LIBRO
// Usuario.belongsToMany(Libro, { through: 'Favorito', as: 'Favoritos' })
// Libro.belongsToMany(Usuario, { through: 'Favorito', as: 'Favoritos' })

//Formato N<=>M Libro
// Formato.belongsToMany(Libro, { through: 'Formato_Libro', as: 'FormatoLibro' })
// Libro.belongsToMany(Formato, { through: 'Formato_Libro', as: 'FormatoLibro' })


//**** open ****/

// Order N<=>M Product
const Details = sequelize.define('Details', { cantidad: DataTypes.INTEGER })
Order.belongsToMany(Product, { through: Details, as: 'ProductOrders' })
Product.belongsToMany(Order, { through: Details, as: 'ProductOrders' })

// Usuario 1=>N Pedido
User.hasMany(Order)
Order.belongsTo(User)

// Usuario N<=>M Libro
// User.belongsToMany(Product, { through: Review, as: 'ReviewLibro' })
// Product.belongsToMany(User, { through: Review, as: 'ReviewLibro' })

//Usuario N<=>M LIBRO
// User.belongsToMany(Product, { through: 'Favorito', as: 'Favoritos' })
// Product.belongsToMany(User, { through: 'Favorito', as: 'Favoritos' })

//Formato N<=>M Libro
Format.belongsToMany(Product, { through: 'Product_Format', as: 'ProductFormat' })
Product.belongsToMany(Format, { through: 'Product_Format', as: 'ProductFormat' })



//****close****/


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
}
