module.exports = (Sequelize, DataTypes) => {
    const Category = Sequelize.define("Category", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          } 
    }); 
    return Category;
  };