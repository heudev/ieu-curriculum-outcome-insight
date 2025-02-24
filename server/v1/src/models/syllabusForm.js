"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class SyllabusForm extends Model {
        static associate(models) {

            FormTable.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            FormTable.belongsTo(models.EvaluationSystem, {
                foreignKey: "evaluationSystemId",
                as: "evaluationSystem",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            FormTable.belongsTo(models.LearningOutcome, {
                foreignKey: "learningOutcomeId",
                as: "learningOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            FormTable.belongsTo(models.ProgramOutcomes, {
                foreignKey: "programOutcomeId",
                as: "programOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            FormTable.belongsTo(models.WeeklySubject, {
                foreignKey: "weeklySubjectId",
                as: "weeklySubject",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            FormTable.belongsTo(models.WorkloadTable, {
                foreignKey: "workloadTableId",
                as: "workloadTable",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    FormTable.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            version: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            courseId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "courses",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            evaluationSystemId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "evaluation_systems",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            learningOutcomeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "learning_outcomes",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            programOutcomeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "program_outcomes",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            weeklySubjectId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "weekly_subjects",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
            workloadTableId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "workload_tables",
                    key: "id",
                },
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "SyllabusForm",
            tableName: "form_syllabus",
            timestamps: true,
        }
    );

    return FormTable;
};
