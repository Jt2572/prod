const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Order', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('Pendiente', 'Enviado', 'Entregado'),
      allowNull: false,
    },
    
    deliverydate: DataTypes.DATE,
  })
}
