"use strict";

const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        static associate(models) {
            Course.hasOne(models.LearningOutcome, {
                foreignKey: "courseId",
                as: "learningOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            });

            Course.hasOne(models.EvaluationSystem, {
                foreignKey: "courseId",
                as: "evaluationSystem",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            });

            Course.hasOne(models.ProgramOutcome, {
                foreignKey: "courseId",
                as: "programOutcome",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            });

            Course.hasOne(models.WeeklySubject, {
                foreignKey: "courseId",
                as: "weeklySubject",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            });

            Course.hasOne(models.WorkloadTable, {
                foreignKey: "courseId",
                as: "workloadTable",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            });
        }

    }

    Course.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            semester: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            theoryHoursPerWeek: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            practiceLabHoursPerWeek: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            localCredit: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            ects: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            prerequisites: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            level: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            deliveryType: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teachingMethods: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            coordinator: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            instructors: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            assistants: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            nationalQualificationCode: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            courseObjective: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            relatedSustainableDevelopmentGoals: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            courseDescription: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Course",
            tableName: "course",
            timestamps: true,
        }
    );

    return Course;
};
