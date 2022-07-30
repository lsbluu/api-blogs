module.exports = (sequelize, DataTypes, ) => {
  const Caterogy = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { timestamps: false},);
  return Caterogy;
}