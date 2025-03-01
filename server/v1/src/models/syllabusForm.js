"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class SyllabusForm extends Model {
        static associate(models) {
            SyllabusForm.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            SyllabusForm.belongsTo(models.EvaluationSystem, {
                foreignKey: "evaluationSystemId",
                as: "evaluationSystem",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            SyllabusForm.belongsTo(models.LearningOutcome, {
                foreignKey: "learningOutcomeId",
                as: "learningOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            SyllabusForm.belongsTo(models.ProgramOutcome, {
                foreignKey: "programOutcomeId",
                as: "programOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            SyllabusForm.belongsTo(models.WeeklySubject, {
                foreignKey: "weeklySubjectId",
                as: "weeklySubject",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });

            SyllabusForm.belongsTo(models.WorkloadTable, {
                foreignKey: "workloadTableId",
                as: "workloadTable",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    SyllabusForm.init(
        {
            version: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            courseId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "courses",
                    key: "id",
                },
            },
            evaluationSystemId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "evaluation_systems",
                    key: "id",
                },
            },
            learningOutcomeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "learning_outcomes",
                    key: "id",
                },
            },
            programOutcomeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "program_outcomes",
                    key: "id",
                },
            },
            weeklySubjectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "weekly_subjects",
                    key: "id",
                },
            },
            workloadTableId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "workload_tables",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "SyllabusForm",
            tableName: "syllabus_forms",
            timestamps: true,
        }
    );

    return SyllabusForm;
};
