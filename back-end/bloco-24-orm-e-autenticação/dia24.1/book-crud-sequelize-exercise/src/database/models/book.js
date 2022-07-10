
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
const book = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pageQuantity: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: 'page_quantity'
    }
  }, {
    underscored: true,
    timestamps: true,
  });
  return book;
};

module.exports = book;