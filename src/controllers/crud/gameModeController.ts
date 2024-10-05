import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'
import { gameModeService } from '@/services'

export class GameModeController extends CrudController<typeof gameModeService> {
	constructor() {
		super(gameModeService)
	}
}
