import * as dotenv from "dotenv";
const sql = require("./database");
dotenv.config({ silent: true });
export default {
    server: {
        host: process.env.HOST_NAME,
        protocol: "http",
        debug: true,
        name: "SERVER NAME",
        port: process.env.PORT || 8765,
        secret: process.env.SERVER_SECRET
    },
    database: {
        // mongo: process.env.MONGOLAB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.production
    },
    socket: {
        port: 9888
    },
    redis: {
        host: process.env.REDIS_HOST_PRODUCTION,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD_PRODUCTION,
        cacheTimeDefault: 10
    },
    queue: {
        concurrency: 20,
        attempts: 2
    },
};
