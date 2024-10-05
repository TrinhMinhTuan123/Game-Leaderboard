import {
  Player,
  GameMode,
  LeaderBoard,
  MatchHistory
} from '@/models/tables';

console.log('Loading Associate Model.....');

//matchHistory n-1 player
MatchHistory.belongsTo(Player, {
  foreignKey: 'player_id',
  as: 'player',
})
Player.hasMany(MatchHistory, {
  foreignKey: 'player_id',
  as: 'matchHistories',
})

//gameMode 1-n matchHistory
GameMode.hasMany(MatchHistory, {
  foreignKey: 'game_mode_id',
  as: 'matchHistories',
})
MatchHistory.belongsTo(GameMode, {
  foreignKey: 'game_mode_id',
  as: 'gameMode',
})

//leaderBoard n-1 player
LeaderBoard.belongsTo(Player, {
  foreignKey: 'player_id',
  as: 'player',
})
Player.hasMany(LeaderBoard, {
  foreignKey: 'player_id',
  as: 'leaderBoards',
})

//leaderBoard 1-n gameMode
LeaderBoard.belongsTo(GameMode, {
  foreignKey: 'game_mode_id',
  as: 'gameMode',
})
GameMode.hasMany(LeaderBoard, {
  foreignKey: 'game_mode_id',
  as: 'leaderBoards',
})