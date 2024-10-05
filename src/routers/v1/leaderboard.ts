import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'
import { leaderBoardController } from '@/controllers'

export default class LeaderBoardRouter extends CrudRouter<typeof leaderBoardController> {
	constructor() {
		super(leaderBoardController)
	}
	customRouting() {

	}
}
