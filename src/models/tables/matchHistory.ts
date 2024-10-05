import { DataTypes } from 'sequelize'
import { sequelize } from '../base'

export const MatchHistory = sequelize.define(
	'tbl_match_history',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		player_id: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'tbl_player',
				key: 'id'
			}
		},
		game_mode_id: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'tbl_game_mode',
				key: 'id'
			}
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},

	},
	{
		hooks: {

		},
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		paranoid: true,
		defaultScope: {
			attributes: { exclude: ['deleted_at'] },
		},
		scopes: {
			deleted: {
				where: { deleted_at: { $ne: null } },
				paranoid: false,
			},
		},
	},
)
