const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "contador",
    {
      numeros: {
        type: DataTypes.INTEGER,
      },
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      flags: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  )
}
