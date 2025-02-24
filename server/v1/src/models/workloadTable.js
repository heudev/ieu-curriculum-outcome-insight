"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class WorkloadTable extends Model {
        static associate(models) {
            // One-to-One Relation with Course
            WorkloadTable.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    WorkloadTable.init(
        {
            courseId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "courses",
                    key: "id",
                },
                allowNull: false,
                unique: true, // One-to-One ilişki için
            },
            semesterActivities: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            duration: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            workload: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "WorkloadTable",
            tableName: "workload_tables",
            timestamps: false,
        }
    );

    return WorkloadTable;
};
