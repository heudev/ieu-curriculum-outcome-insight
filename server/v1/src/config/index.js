require('dotenv').config();

module.exports = {
    server: {
        port: 3030
    },
    db: {
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT,
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DIALECT: process.env.POSTGRES_DIALECT,
    },
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: process.env.POSTGRES_DIALECT
    }
};
