import { ErrorService } from './errorService';
import { UtilService } from "@/services/utilService";
// Crud
import { ICrudExecOption, CrudService } from './crudService';
import { ScheduleService } from './scheduleService';
import { PlayerService } from './crud/playerService'
import { GameModeService } from './crud/gameModeService'
import { MatchHistoryService } from './crud/matchHistoryService'
import { LeaderBoardService } from './crud/leaderBoardService'
// SECTION

const errorService = new ErrorService();
const utilService = new UtilService();
const scheduleService = new ScheduleService();
// Crud
const playerService = new PlayerService()
const gameModeService = new GameModeService()
const matchHistoryService = new MatchHistoryService()
const leaderBoardService = new LeaderBoardService()



// SECTION

export {
  CrudService,
  ICrudExecOption,
  utilService,
  errorService,
  scheduleService,
  playerService,
  gameModeService,
  matchHistoryService,
  leaderBoardService
};
