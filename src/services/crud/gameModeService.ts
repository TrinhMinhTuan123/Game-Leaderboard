import { ICrudOption } from '@/interfaces';
import { CrudService } from '../crudService.pg'
import { GameMode } from '@/models/tables'
import sequelize from 'sequelize';

export class GameModeService extends CrudService<typeof GameMode> {
	constructor() {
		super(GameMode)
	}
}
