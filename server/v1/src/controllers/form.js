const { models } = require('../loaders/database');
const { Course, SyllabusForm } = require("../loaders/database");

exports.getForms = async (req, res) => {
  try {
    const { courseCode, version, page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    if (!courseCode || !version) {
      return res.status(400).json({ message: "courseCode ve version zorunludur." });
    }

    const course = await Course.findOne({
      where: { code: courseCode },
      attributes: ["id"],
    });

    if (!course) {
      return res.status(404).json({ message: "Belirtilen courseCode ile ders bulunamadı." });
    }

    const { count, rows: forms } = await SyllabusForm.findAndCountAll({
      where: { courseId: course.id, version },
      offset: parseInt(offset),
      limit: parseInt(limit),
    });

    res.status(200).json({
      data: forms,
      pagination: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
        itemsPerPage: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error fetching syllabus forms:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


exports.getForm = async (req, res) => {
  try {
    const { courseCode, version } = req.query;

    if (!courseCode || !version) {
      return res.status(400).json({ message: "courseCode ve version zorunludur." });
    }

    const course = await Course.findOne({
      where: { code: courseCode },
      attributes: ["id"],
    });

    if (!course) {
      return res.status(404).json({ message: "Belirtilen courseCode ile ders bulunamadı." });
    }

    const form = await SyllabusForm.findOne({
      where: { courseId: course.id, version },
    });

    if (!form) {
      return res.status(404).json({ message: "Syllabus form bulunamadı." });
    }

    res.status(200).json({ data: form });
  } catch (error) {
    console.error("Error fetching syllabus form:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


exports.createForm = async (req, res) => {
  try {

    //TODO: use at the top and refactor to prevent duplication
    const {
      Course,
      WorkloadTable,
      WeeklySubject,
      ProgramOutcome,
      LearningOutcome,
      EvaluationSystem,
      SyllabusForm,
    } = models;


    console.log('req.body', req.body);


    const course = await Course.create({
      ...req.body.course,
    });


    const learningOutcome = await LearningOutcome.create({
      ...req.body.course.learningOutcome,
      courseId: course.id,
    });


    const workloadTable = await WorkloadTable.create({
      ...req.body.workloadTable,
      courseId: course.id,
    });

    const programOutcome = await ProgramOutcome.create({
      ...req.body.programOutcome,
      courseId: course.id,
    });

    const weeklySubject = await WeeklySubject.create({
      ...req.body.weeklySubject,
      courseId: course.id,
    });

    const evaluationSystem = await EvaluationSystem.create({
      ...req.body.evaluationSystem,
      courseId: course.id,
    });

    const syllabusForm = await SyllabusForm.create({
      ...req.body.SyllabusForm,
      courseId: course.id,
      learningOutcomeId: learningOutcome.id,
      programOutcomeId: programOutcome.id,
      weeklySubjectId: weeklySubject.id,
      workloadTableId: workloadTable.id,
      evaluationSystemId: evaluationSystem.id,
    });


    return res.status(201).json({
      message: 'Dummy course created successfully!',
      course: syllabusForm,
    });
  } catch (error) {
    console.error('Error creating dummy course:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
