import { BlockMiddleware } from "./blockMiddleware";
import { QueryMiddleware } from "./queryMiddleware";
import { RedisCacheMiddleware } from "./redisCacheMiddleware";


const blockMiddleware = new BlockMiddleware();
const queryMiddleware = new QueryMiddleware();
const redisCacheMiddleware = new RedisCacheMiddleware();
export {
    blockMiddleware,
    queryMiddleware,
    redisCacheMiddleware,
};
