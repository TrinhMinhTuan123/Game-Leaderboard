import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { LeaderBoard } from '@/models/tables'
import sequelize from 'sequelize';

export class LeaderBoardService extends CrudService<typeof LeaderBoard> {
	constructor() {
		super(LeaderBoard)
	}
	async getTopLeaderBoard(option: ICrudOption = {}, gameModeId?: string) {
		const queryOptions = this.buildQueryOptions(option, gameModeId);
		const page = option.page || 1;
		const limit = option.limit || 10;
		console.log(queryOptions)
		const result = await await this.exec(this.modelWithScope(queryOptions.scope).findAndCountAll(queryOptions));
		return this.LeaderBoardResult(result, page, limit);
	}

	private buildQueryOptions(option: ICrudOption, gameModeId?: string): ICrudOption {
		const queryOptions: ICrudOption = {
			...option,
			include: [{ association: 'player', attributes: [] }],
			raw: true,
			order: [['total_score', 'desc']]
		};

		if (gameModeId) {
			queryOptions.where = { ...queryOptions.where, game_mode_id: gameModeId };
			queryOptions.attributes = [
				'total_score',
				'player_id',
				'player.name'
			];
		} else {
			queryOptions.group = ['player_id'];
			queryOptions.attributes = [
				[sequelize.fn('sum', sequelize.col('total_score')), 'total_score'],
				'player_id',
				'player.name'
			];
		}

		return queryOptions;
	}
	private LeaderBoardResult(result: any, page: number, limit: number) {
		result.rows = result.rows.map((row: any, index: number) => ({
			...row,
			total_score: parseInt(row.total_score),
			rank: index + (page - 1) * limit + 1 //calculate rank
		}));
		result.count = result.count.length;
		return result;
	}
}
