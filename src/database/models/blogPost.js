module.exports = (Sequelize, DataTypes) => {
    const BlogPost = Sequelize.define("BlogPost", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          content: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          published: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated: {
            type: Sequelize.DATE,
            allowNull: false,
          }
    }); 
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
          foreignKey: "userId"
        });
    }    
    return BlogPost;
}