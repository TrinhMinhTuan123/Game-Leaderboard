import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'
import { leaderBoardService } from '@/services'

export class LeaderBoardController extends CrudController<typeof leaderBoardService> {
	constructor() {
		super(leaderBoardService)
	}
}
