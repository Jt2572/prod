const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('categoria', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
    
  })
}