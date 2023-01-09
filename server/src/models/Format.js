const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Format', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
}
