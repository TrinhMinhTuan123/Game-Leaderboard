import { BaseMiddleware } from './base'
import { NextFunction } from 'express'
import { Request, Response } from '@/routers/base'
import { redisService } from '@/services'

export class RedisCacheMiddleware extends BaseMiddleware {
	async use(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const cacheKey = this.generateCacheKey(req)
		try {
			const cachedData = await redisService.getCachedData(cacheKey)
			if (cachedData) {
				const data = JSON.parse(cachedData)
				console.log('API will return cache')
				res.json(data)
			} else {
				req.body.cacheKey = cacheKey
				next()
			}
		} catch (error) {
			console.error('Redis error:', error)
			req.body.cacheKey = cacheKey
			next()
		}
	}

	private generateCacheKey(req: Request): string {
		const pathAPI: string = req.originalUrl
		// const ipAddr = req.headers['x-forwarded-for'] ||
		// 	req.connection.remoteAddress ||
		// 	req.socket.remoteAddress
		// const userAgent = req.get('User-Agent')
		return `${pathAPI}`
	}
}
