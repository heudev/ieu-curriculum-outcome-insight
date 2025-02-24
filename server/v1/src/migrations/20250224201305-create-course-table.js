"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      semester: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      theoryHoursPerWeek: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      practiceLabHoursPerWeek: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      localCredit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ects: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      prerequisites: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teachingMethods: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      coordinator: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      instructors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      assistants: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      nationalQualificationCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      courseObjective: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      relatedSustainableDevelopmentGoals: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      courseDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("course");
  },
};
