'use strict';

module.exports = {
   /**
*@param {import('sequelize').QueryInterface} queryInterface
*@param {import('sequelize).Sequelize} Sequelize
*/
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        displayName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
