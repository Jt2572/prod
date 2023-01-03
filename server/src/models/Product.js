const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING      
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isAvail: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    

  })
}