"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("syllabus_forms", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
      evaluationSystemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "evaluation_systems",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      learningOutcomeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "learning_outcomes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      programOutcomeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "program_outcomes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      weeklySubjectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "weekly_subjects",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      workloadTableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "workload_tables",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:  Sequelize.fn("NOW"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("syllabus_forms");
  },
};
