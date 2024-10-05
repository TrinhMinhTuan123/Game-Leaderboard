import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { MatchHistory } from '@/models/tables'
import sequelize from 'sequelize';

export class MatchHistoryService extends CrudService<typeof MatchHistory> {
	constructor() {
		super(MatchHistory)
	}
}
