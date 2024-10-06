import { Job } from 'bull';
import { ICreateMatchHistory } from '@/interfaces';
import { sequelize } from '@/models';
import { leaderBoardService, matchHistoryService } from '@/services';
import { ILeaderBoard } from '@/interfaces';

class ScoreSubmitter {
    private transaction: any;

    constructor(private job: Job) {
        this.transaction = null;
    }
    async processScoreSubmission() {
        const { player_id, game_mode_id, score }: ICreateMatchHistory = this.job.data;
        this.transaction = await sequelize.transaction();

        try {
            const matchHistory = await this.saveMatchHistory(player_id, game_mode_id, score);
            await this.updateLeaderBoard(player_id, game_mode_id, score);
            await this.transaction.commit();
            console.log(`Score submitted and leaderboard updated for player ${player_id}`);
            return matchHistory;
        } catch (error) {
            console.error('Error processing job:', error);
            await this.transaction.rollback();
            throw error;
        }
    }

    private async saveMatchHistory(player_id: string, game_mode_id: string, score: number): Promise<any> {
        return await matchHistoryService.create({
            player_id,
            game_mode_id,
            score,
        }, { transaction: this.transaction });
    }

    private async updateLeaderBoard(player_id: string, game_mode_id: string, score: number) {

        const leaderBoard: ILeaderBoard = await this.findLeaderBoard(player_id, game_mode_id)
        if (leaderBoard) { // update existing leaderBoard
            await this.updateExistingLeaderBoard(leaderBoard, score);
        } else { // create new leaderBoard
            await this.createNewLeaderBoard(player_id, game_mode_id, score);
        }
    }

    private async findLeaderBoard(player_id: string, game_mode_id: string) {
        const leaderBoard: ILeaderBoard = await leaderBoardService.getItem({
            where: { player_id, game_mode_id },
            attributes: ['id', 'total_score', 'player_id', 'game_mode_id'],
            transaction: this.transaction,
        }, true);
        return leaderBoard
    }

    private async updateExistingLeaderBoard(leaderBoard: ILeaderBoard, score: number) {
        await leaderBoardService.update({
            total_score: leaderBoard.total_score + score,
        }, { where: { id: leaderBoard.id }, transaction: this.transaction });
    }

    private async createNewLeaderBoard(player_id: string, game_mode_id: string, score: number) {
        await leaderBoardService.create({
            total_score: score,
            player_id,
            game_mode_id,
        }, { transaction: this.transaction });
    }


}
const submitScoreProcessor = async (job: Job) => {
    const scoreSubmitter = new ScoreSubmitter(job);
    return scoreSubmitter.processScoreSubmission();
};
export {
    submitScoreProcessor
}

