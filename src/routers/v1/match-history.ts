import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'
import { matchHistoryController } from '@/controllers'

export default class MatchHistoryRouter extends CrudRouter<typeof matchHistoryController> {
	constructor() {
		super(matchHistoryController)
	}
	customRouting() {

	}
}
