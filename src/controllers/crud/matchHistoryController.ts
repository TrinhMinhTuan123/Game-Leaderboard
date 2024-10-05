import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'
import { matchHistoryService } from '@/services'

export class MatchHistoryController extends CrudController<typeof matchHistoryService> {
	constructor() {
		super(matchHistoryService)
	}
}
