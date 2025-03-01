'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class LearningOutcome extends Model {
    static associate(models) {
      LearningOutcome.belongsTo(models.Course, {
        foreignKey: 'courseId', as: 'course',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  LearningOutcome.init(
    {
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pcSub: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      contributionLevel: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: 'LearningOutcome',
      tableName: 'learning_outcomes',
      timestamps: false,
    },
  );

  return LearningOutcome;
};
