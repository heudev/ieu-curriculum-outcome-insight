import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../types/course';

type CourseState = Course;

const initialState: CourseState = {
    name: '',
    code: '',
    semester: 'fall',
    theory: 0,
    practice: 0,
    localCredit: 0,
    ects: 0,
    prerequisites: [],
    language: 'tr',
    type: 'mandatory',
    level: 'undergraduate',
    deliveryType: 'faceToFace',
    teachingMethods: [],
    coordinator: '',
    instructors: [],
    assistants: [],
    nationalQualificationCode: '',
    purpose: '',
    description: '',
    category: null,
    outcomes: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        content: '',
        programAlternative: '',
        contributionLevel: null,
        py: '',
        pyAlt: ''
    })),
    evaluationSystem: {
        activities: [
            { id: 1, name: 'participation', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 2, name: 'laboratory', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 3, name: 'fieldwork', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 4, name: 'quiz', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 5, name: 'portfolio', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 6, name: 'homework', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 7, name: 'presentation', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 8, name: 'project', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 9, name: 'seminar', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 10, name: 'oralExam', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 11, name: 'midterm', quantity: 0, contribution: 0, learningOutcomes: [] },
            { id: 12, name: 'final', quantity: 0, contribution: 0, learningOutcomes: [] }
        ],
        midtermContribution: 0,
        finalContribution: 0,
        leftColumn: 0,
        rightColumn: 0
    },
    ectsWorkload: [
        { activity: 'courseHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'laboratoryHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'studyHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'fieldwork', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'quizHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'portfolio', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'homeworkHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'presentationHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'projectHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'seminarHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'oralExam', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'midtermHours', quantity: 0, duration: 0, totalWorkload: 0 },
        { activity: 'finalHours', quantity: 0, duration: 0, totalWorkload: 0 }
    ],
    weeklyTopics: Array.from({ length: 16 }, () => ({
        topics: '',
        preparation: '',
        learningOutcomes: ''
    })),
    textbook: '',
    suggestedReadings: ''
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        updateCourse: (state, action: PayloadAction<Partial<Course>>) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
