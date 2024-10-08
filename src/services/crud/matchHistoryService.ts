// import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { MatchHistory } from '@/models/tables'
import { queueService } from '@/services';
import { ICreateMatchHistory } from '@/interfaces';
import { errorService } from '@/services';
import { HttpStatus } from '@/common/enum';
import { playerService, gameModeService } from '@/services';


export class MatchHistoryService extends CrudService<typeof MatchHistory> {
	constructor() {
		super(MatchHistory)
	}
	async submitScore(params: ICreateMatchHistory) {
		const { player_id, game_mode_id, score } = params;
		const player = await playerService.getItem({ where: { id: player_id } }, true);
		if (!player) {//check player exist
			throw errorService.database.recordNotFound('Player not found');
		}
		const gameMode = await gameModeService.getItem({ where: { id: game_mode_id } }, true);
		if (!gameMode) {//check game mode exist
			throw errorService.database.recordNotFound('Game mode not found');
		}
		try {//add score to queue
			await queueService.addScoreToQueue({ player_id, game_mode_id, score });
			return { message: 'score added to queue successfully' }
		} catch (error) {//if error, throw error
			// message = 'error adding score to queue';
			throw errorService.database.customError('error adding score to queue', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}	
