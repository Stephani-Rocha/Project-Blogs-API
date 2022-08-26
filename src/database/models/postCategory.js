module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            allowNull: false,
            references: {
              model: 'BlogPosts',
              key: 'id'
            }
          },
          categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            allowNull: false,
            references: {
              model: 'Categories',
              key: 'id'
            }
          }
    }); 
    // PostCategory.associate = (models) => {
    //     models.BlogPost.belongsToMany(models.BlogPost, {
    //       through: PostCategory,
    //       foreignKey: 'postId',
    //       otherKey: 'categoryId',
    //     });
    
    //     models.Episode.belongsToMany(models.Character, {
    //       through: PostCategory,
    //       as: 'characters',
    //       foreignKey: 'episodeId',
    //       otherKey: 'characterId',
    //     });
    // }    
    return PostCategory;
}