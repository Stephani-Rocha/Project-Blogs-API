module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
              model: "BlogPosts",
              key: "id"
            }
          },
          categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
              model: "Categories",
              key: "id"
            }
          }
    }, { timestamps: false }); 
    PostCategory.associate = (models) => { 
        models.Category.belongsToMany(models.BlogPost, {
          through: PostCategory,
          foreignKey: 'postId',
          otherkey: 'categoryId',
          as: 'blogPost'
        });
        models.BlogPost.belongsToMany(models.Category, {
          through: PostCategory,
          foreignKey: 'categoryId',
          otherkey: 'postId',
          as: 'categories'
        });
    }    
    return PostCategory;
}