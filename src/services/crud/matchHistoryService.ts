import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { MatchHistory } from '@/models/tables'
import sequelize from 'sequelize';
import { queueService } from '@/services';
import { ICreateMatchHistory } from '@/interfaces';

export class MatchHistoryService extends CrudService<typeof MatchHistory> {
	constructor() {
		super(MatchHistory)
	}
	async submitScore(params: ICreateMatchHistory) {
		const { player_id, game_mode_id, score } = params;
		let message
		try {
			await queueService.addScoreToQueue({ player_id, game_mode_id, score });
			message = 'score added to queue successfully';
		} catch (error) {
			message = 'error adding score to queue';
		}
		return { message }
	}
}
