module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          displayName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          image: {
            type: Sequelize.STRING,
            allowNull: false,
          }  
    });
    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
          foreignKey: "userId"
        });
    }  
    return User;
  };