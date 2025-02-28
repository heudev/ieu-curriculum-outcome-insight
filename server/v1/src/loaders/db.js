const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: 'postgres',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connection established successfully.');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
})();

module.exports = {
    sequelize,
};