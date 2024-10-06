import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'
import { leaderBoardService } from '@/services'

export class LeaderBoardController extends CrudController<typeof leaderBoardService> {
	constructor() {
		super(leaderBoardService)
	}
	async getTopLeaderBoard(option?: ICrudOption, gameModeId?: string) {
		const result = await this.service.getTopLeaderBoard(option, gameModeId)
		return result
	}
}
