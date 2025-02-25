require('dotenv').config();

module.exports = {
    server: {
        port: process.env.PORT
    },
    db: {
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT,
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DIALECT: process.env.POSTGRES_DIALECT,
    }
};
