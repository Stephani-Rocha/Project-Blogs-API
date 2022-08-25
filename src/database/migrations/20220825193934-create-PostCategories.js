'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};