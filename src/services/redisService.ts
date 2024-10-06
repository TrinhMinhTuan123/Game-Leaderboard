import { redisClient } from '@/models/redis';

export class RedisService {
    private readonly client: typeof redisClient
    constructor() {
        this.client = redisClient
    }
    async getCachedData(key: string) {
        return await this.client.get(key)
    }
    async cache(key: string, time: number, data: any) {
        const stringData = JSON.stringify(data)
        await this.client.set(key, stringData, {
            EX: time,
            NX: true,
        })
        console.log('success cache')
    }
    async clearCache(key: string) {
        await this.client.del(key)
    }
}
