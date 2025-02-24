"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("weekly_subjects", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "course",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      learningOutcomeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "learning_outcomes",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      week: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subjects: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      relatedPreparation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      courseNotes: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      suggestedReadings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("weekly_subjects");
  },
};
