'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'tbl_leaderboard',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          player_id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'tbl_player',
              key: 'id'
            }
          },
          game_mode_id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'tbl_game_mode',
              key: 'id'
            }
          },
          total_score: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          created_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          deleted_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
          },
        },
        {
          indexes: [
            {
              fields: ['player_id']
            },
            {
              fields: ['game_mode_id']
            }
          ]
        },
        {
          transaction,
        },
      )
    })
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('tbl_leaderboard', { transaction })
    })
  },
}
