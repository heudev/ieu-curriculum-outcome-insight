"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class ProgramOutcomes extends Model {
        static associate(models) {

            ProgramOutcomes.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    ProgramOutcomes.init(
        {
            courseId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "courses",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            programCompetencies: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contributionLevel: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                    max: 5,
                },
            },
            order: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "ProgramOutcomes",
            tableName: "program_outcomes",
            timestamps: false,
        }
    );

    return ProgramOutcomes;
};
