import * as dotenv from 'dotenv'
const sql = require('./database')
dotenv.config({ silent: true })
export default {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: true,
        name: 'LOCAL NAME',
        port: process.env.PORT || 8765,
        secret: process.env.SERVER_SECRET
    },
    database: {
        // mongo: process.env.MONGODB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.development
    },
    socket: {
        port: 9888
    },
}
