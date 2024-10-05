import { playerService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class PlayerController extends CrudController<typeof playerService> {
	constructor() {
		super(playerService)
	}
}
