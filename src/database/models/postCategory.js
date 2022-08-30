module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
          },
          categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
          }
    }, { timestamps: false }); 
    PostCategory.associate = (models) => { 
        models.Category.belongsToMany(models.BlogPost, {
          through: PostCategory,
          foreignKey: 'categoryId',
        });
        models.BlogPost.belongsToMany(models.Category, {
          through: PostCategory,
          foreignKey: 'postId',
        });
    }    
    return PostCategory;
}