const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: DataTypes.STRING,
  })
}
