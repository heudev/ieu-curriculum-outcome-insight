require('dotenv').config();

module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'ieu_curriculum',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres'
    }
};