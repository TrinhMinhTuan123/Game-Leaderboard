import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'
import { matchHistoryController } from '@/controllers'
import { ICreateMatchHistory } from '@/interfaces'
import { Player, GameMode } from '@/models'




export default class MatchHistoryRouter extends CrudRouter<typeof matchHistoryController> {
	constructor() {
		super(matchHistoryController)
	}
	customRouting() {
		//api create match history custom
		this.router.post('/submit-score', this.route(this.submitScore))
	}
	async submitScore(req: Request, res: Response) {
		const schema = {
			type: 'object',
			properties: {
				player_id: {
					type: 'string',
				},
				game_mode_id: {
					type: 'string',
				},
				score: {
					type: 'number',
					minimum: 0
				}
			},
			required: ['player_id', 'game_mode_id', 'score'],
		}
		await this.validateJSON(req.body, schema)
		const { player_id, game_mode_id, score } = req.body;

		const result = await this.controller.submitScore({ player_id, game_mode_id, score });
		this.onSuccess(res, { result });
	}
	submitMiddleware(): any[] {
		return [];
	}
}