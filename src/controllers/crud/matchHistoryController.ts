import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'
import { matchHistoryService } from '@/services'
import { ICreateMatchHistory } from '@/interfaces';

export class MatchHistoryController extends CrudController<typeof matchHistoryService> {
	constructor() {
		super(matchHistoryService)
	}
	async submitScore(params: ICreateMatchHistory) {
		const result = await this.service.submitScore(params);
		return result;
	}
}
