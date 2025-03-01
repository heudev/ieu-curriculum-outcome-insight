const { Sequelize } = require("sequelize");
const path = require("path");
const rootDir = require('../scripts/utils/path');
const config = require(path.join(rootDir, 'config', 'index.js'));


const sequelize = new Sequelize(
    config.db.POSTGRES_DB,
    config.db.POSTGRES_USER,
    config.db.POSTGRES_PASSWORD,
    {
        host: config.db.POSTGRES_HOST,
        port: config.db.POSTGRES_PORT,
        dialect: config.db.POSTGRES_DIALECT,
        logging: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const models = {};
models.Course = require("../models/course")(sequelize);
models.LearningOutcome = require("../models/learningOutcome")(sequelize);
models.EvaluationSystem = require("../models/evaluationSystem")(sequelize);
models.ProgramOutcome = require("../models/programOutcome")(sequelize);
models.WeeklySubject = require("../models/weeklySubject")(sequelize);
models.WorkloadTable = require("../models/workloadTable")(sequelize);
models.SyllabusForm = require("../models/syllabusForm")(sequelize);

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});



const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ PostgreSQL connection established successfully.");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB, models };
