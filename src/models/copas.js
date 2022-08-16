const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "copas",
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
      resultado: {
        type: DataTypes.STRING,
      },
      vs: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  )
}
