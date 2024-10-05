import { playerController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class PlayerRouter extends CrudRouter<typeof playerController> {
	constructor() {
		super(playerController)
	}
	customRouting() {

	}
}
