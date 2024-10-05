import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'
import { gameModeController } from '@/controllers'

export default class GameModeRouter extends CrudRouter<typeof gameModeController> {
	constructor() {
		super(gameModeController)
	}
	customRouting() {

	}
}
