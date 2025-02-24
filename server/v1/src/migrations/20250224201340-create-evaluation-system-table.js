"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("evaluation_systems", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "course",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      semesterActivities: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weighting: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      semesterActivityCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      semesterActivityWeight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      endOfSemesterActivityCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      endOfSemesterActivityWeight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      LO_1: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_2: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_3: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_4: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      LO_5: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("evaluation_systems");
  },
};
