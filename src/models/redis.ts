import { config } from '@/config'
import { createClient, RedisClientType } from 'redis'

class RedisConnection {
    private static instance: RedisConnection;
    private client: RedisClientType;

    private constructor() {
        const option = {
            url: `redis://${config.redis.host}:${config.redis.port}`
        };
        this.client = createClient(option);
        this.connect();
        this.client.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
    }

    public static getInstance(): RedisConnection {
        if (!RedisConnection.instance) {
            RedisConnection.instance = new RedisConnection();
        }
        return RedisConnection.instance;
    }

    private connect() {
        this.client.connect().catch((err) => {
            console.error('Redis connection failed:', err);
        });
        this.client.on('connect', () => {
            console.log('Connected to Redis...');
        });
        this.client.on('error', (err) => {
            console.error('Redis error:', err);
        });
    }

    public getClient(): RedisClientType {
        return this.client;
    }
}
const redisClient = RedisConnection.getInstance().getClient();
export {
    redisClient
}