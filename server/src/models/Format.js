const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('format', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
}