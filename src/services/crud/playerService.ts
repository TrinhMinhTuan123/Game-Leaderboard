import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { Player } from '@/models/tables'
import sequelize from 'sequelize';

export class PlayerService extends CrudService<typeof Player> {
	constructor() {
		super(Player)
	}
}
