'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class EvaluationSystem extends Model {
    static associate(models) {
      if (models.Course) {
        EvaluationSystem.belongsTo(models.Course, {
          foreignKey: 'courseId',
          as: 'course',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        });
      }
    }
  }

  EvaluationSystem.init(
    {
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
        allowNull: true,
      },
      semesterActivities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weighting: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      semesterActivityCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      semesterActivityWeight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      endOfSemesterActivityCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      endOfSemesterActivityWeight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },

      LO_1: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_2: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_3: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_4: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_5: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'EvaluationSystem',
      tableName: 'evaluation_systems',
      timestamps: false,
    },
  );

  return EvaluationSystem;
};
