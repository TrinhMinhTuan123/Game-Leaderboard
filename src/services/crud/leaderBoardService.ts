import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { LeaderBoard } from '@/models/tables'
import sequelize from 'sequelize';

export class LeaderBoardService extends CrudService<typeof LeaderBoard> {
	constructor() {
		super(LeaderBoard)
	}
}
