const Queue = require('bull');
import { config } from '../config';
import { submitScoreProcessor } from '../workers/submitScoreWorker';
import { ICreateMatchHistory } from '../interfaces';

export class QueueService {
    private scoreQueue: any

    constructor() {
        this.initializeQueue();
    }

    private initializeQueue() {
        try {
            this.scoreQueue = new Queue('scoreQueue', `redis://${config.redis.host}:${config.redis.port}`);
            const concurrency = config.queue.concurrency;
            this.scoreQueue.process(concurrency, submitScoreProcessor);

            this.logJobCounts();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing queue:', error);
        }
    }

    private async logJobCounts() {
        const jobCounts = await this.scoreQueue.getJobCounts();
        console.log('Job Count:', jobCounts);
    }

    private setupEventListeners() {
        this.scoreQueue.on('failed', (job: any, err: Error) => {
            console.error(`Job failed with error: ${err.message}`);
        });

        this.scoreQueue.on('completed', (job: any, result: any) => {
            console.log(`Job completed with result: ${result}`);
        });
    }

    public async addScoreToQueue(data: ICreateMatchHistory) {
        await this.scoreQueue.add(data, {
            attempts: config.queue.attempts,//default 2
        });
    }
}
