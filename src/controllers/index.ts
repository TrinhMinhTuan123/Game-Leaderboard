import { CrudController } from './crudController';
import { PlayerController } from './crud/playerController'
import { GameModeController } from './crud/gameModeController'
import { MatchHistoryController } from './crud/matchHistoryController'
import { LeaderBoardController } from './crud/leaderBoardController'




// SECTION

// Crud
const playerController = new PlayerController()
const gameModeController = new GameModeController()
const matchHistoryController = new MatchHistoryController()
const leaderBoardController = new LeaderBoardController()



// SECTION

export {
  CrudController,
  playerController,
  gameModeController,
  matchHistoryController,
  leaderBoardController
};
