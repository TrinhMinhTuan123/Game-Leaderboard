import { Request, Response } from '../base'
import { CrudRouter } from '../crud'
import { leaderBoardController } from '@/controllers'
import { queryMiddleware, redisCacheMiddleware } from '@/middlewares'
import { config } from '../../config'

export default class LeaderBoardRouter extends CrudRouter<typeof leaderBoardController> {
	constructor() {
		super(leaderBoardController)
	}
	customRouting() {
		//api get leaderboard top
		this.router.get('/top/:gameModeId?', this.getTopLeaderboardMiddleware(), this.route(this.getTopLeaderBoard))

	}
	async getTopLeaderBoard(req: Request, res: Response) {
		const schema = {
			type: 'object',
			properties: {
				gameModeId: { type: 'string' }
			}
		}

		await this.validateJSON(req.params, schema)
		const { gameModeId } = req.params
		const result = await this.controller.getTopLeaderBoard(req.queryInfo, gameModeId)

		if (req.body.cacheKey) {
			const cacheOption = {
				time: config.redis.cacheTimeDefault, //default cache time is 20 seconds
				key: req.body.cacheKey
			}
			this.onSuccessAsListWithCache(res, result, undefined, req.queryInfo, cacheOption)
		} else {
			this.onSuccessAsList(res, result, undefined, req.queryInfo)
		}
	}
	getTopLeaderboardMiddleware(): any {
		return [
			queryMiddleware.run(),
			redisCacheMiddleware.run(),
		]
	}
}
