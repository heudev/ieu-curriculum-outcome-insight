"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class WeeklySubject extends Model {
        static associate(models) {
            WeeklySubject.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            WeeklySubject.belongsTo(models.LearningOutcome, {
                foreignKey: "learningOutcomeId",
                as: "learningOutcome",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            });
        }
    }

    WeeklySubject.init(
        {
            courseId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "courses",
                    key: "id",
                },
                allowNull: false,
            },
            learningOutcomeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "learning_outcomes",
                    key: "id",
                },
                allowNull: true,
            },
            week: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            subjects: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            relatedPreparation: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            courseNotes: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            suggestedReadings: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: "WeeklySubject",
            tableName: "weekly_subject",
            timestamps: false,
        }
    );

    return WeeklySubject;
};
