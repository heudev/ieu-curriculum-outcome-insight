export interface ICourse {
  name: string;
  code: string;
  semester: string;
  theoryHoursPerWeek: number;
  practiceLabHoursPerWeek: number;
  localCredit: number;
  ects: number;
  prerequisites?: string[];
  language: string;
  type: string;
  level: string;
  deliveryType: string;
  teachingMethods?: string[];
  coordinator?: string[];
  instructors?: string[];
  assistants?: string[];
  nationalQualificationCode?: string;
  courseObjective: string;
  learningOutcome:ILearningOutcome;
  relatedSustainableDevelopmentGoals?: string;
  courseDescription: string;
}

export enum ECourse {
  NAME = "name",
  CODE = "code",
  SEMESTER = "semester",
  THEORY_HOURS = "theoryHoursPerWeek",
  PRACTICE_HOURS = "practiceLabHoursPerWeek",
  LOCAL_CREDIT = "localCredit",
  ECTS = "ects",
  PREREQUISITES = "prerequisites",
  LANGUAGE = "language",
  TYPE = "type",
  LEVEL = "level",
  DELIVERY_TYPE = "deliveryType",
  TEACHING_METHODS = "teachingMethods",
  COORDINATOR = "coordinator",
  INSTRUCTORS = "instructors",
  ASSISTANTS = "assistants",
  NATIONAL_QUALIFICATION_CODE = "nationalQualificationCode",
  COURSE_OBJECTIVE = "courseObjective",
  RELATED_SDG = "relatedSustainableDevelopmentGoals",
  COURSE_DESCRIPTION = "courseDescription",
}

export interface IEvaluationSystem {
    courseId: number;
    semesterActivities: string;
    number: number;
    weighting: number;

    semesterActivityCount: number;
    semesterActivityWeight: number;
    endOfSemesterActivityCount: number;
    endOfSemesterActivityWeight: number;

    LO_1: boolean;
    LO_2: boolean;
    LO_3: boolean;
    LO_4: boolean;
    LO_5: boolean;
}

export enum EEvaluationSystemEnum {
    COURSE_ID = "courseId",
    SEMESTER_ACTIVITIES = "semesterActivities",
    NUMBER = "number",
    WEIGHTING = "weighting",

    SEMESTER_ACTIVITY_COUNT = "semesterActivityCount",
    SEMESTER_ACTIVITY_WEIGHT = "semesterActivityWeight",
    END_OF_SEMESTER_ACTIVITY_COUNT = "endOfSemesterActivityCount",
    END_OF_SEMESTER_ACTIVITY_WEIGHT = "endOfSemesterActivityWeight",

    LO_1 = "lo1",
    LO_2 = "lo2",
    LO_3 = "lo3",
    LO_4 = "lo4",
    LO_5 = "lo5"
}

export interface ILearningOutcome {
    courseId: number;
    order: number;
    content: string;
    pcSub?: number;
    contributionLevel?: number;
}

export enum LearningOutcomeEnum {
    COURSE_ID = "courseId",
    ORDER = "order",
    CONTENT = "content",
    PC_SUB = "pcSub",
    CONTRIBUTION_LEVEL = "contributionLevel"
}

export interface IProgramOutcomes {
    courseId: number;
    programCompetencies: string;
    contributionLevel: number;
    order: number;
}

export enum EProgramOutcomesEnum {
    COURSE_ID = "courseId",
    PROGRAM_COMPETENCIES = "programCompetencies",
    CONTRIBUTION_LEVEL = "contributionLevel",
    ORDER = "order"
}

export interface IWeeklySubject {
    courseId: number;
    learningOutcomeId?: number;
    week: number;
    subjects: string;
    relatedPreparation?: string;
    courseNotes?: string[];
    suggestedReadings?: string[];
}

export enum EWeeklySubjectEnum {
    COURSE_ID = "courseId",
    LEARNING_OUTCOME_ID = "learningOutcomeId",
    WEEK = "week",
    SUBJECTS = "subjects",
    RELATED_PREPARATION = "relatedPreparation",
    COURSE_NOTES = "courseNotes",
    SUGGESTED_READINGS = "suggestedReadings"
}

export interface IWorkloadTable {
    courseId: number;
    semesterActivities: string;
    number: number;
    duration: number;
    workload: number;
}

export enum EWorkloadTableEnum {
    COURSE_ID = "courseId",
    SEMESTER_ACTIVITIES = "semesterActivities",
    NUMBER = "number",
    DURATION = "duration",
    WORKLOAD = "workload"
}

export interface ISyllabusForm {
    id?: number;
    version?: number; //TODO: remove ? optional chaining
    course: ICourse;
    weeklySubject: IWeeklySubject; //TODO: remove ? optional chaining
    evaluationSystem: IEvaluationSystem; //TODO: remove ? optional chaining
    workloadTable: IWorkloadTable; //TODO: remove ? optional chaining
    programOutcome: IProgramOutcomes; //TODO: remove ? optional chaining
}

export enum ESyllabusFormEnum {
    ID = "id",
    VERSION = "version",
    COURSE = "course",
    EVALUATION_SYSTEM = "evaluationSystem",
    LEARNING_OUTCOME = "learningOutcome",
    PROGRAM_OUTCOME = "programOutcome",
    WEEKLY_SUBJECT = "weeklySubject",
    WORKLOAD_TABLE = "workloadTable"
}

export enum ECommon {
    SELECT = "select",
    LANGUAGE = "language",
    TURKISH = "turkish",
    ENGLISH = "english",
    USER_MENU = "userMenu",
    ENTER_NUMBER = "enterNumber",
}

export enum ESemesters {
    FALL = "fall",
    SPRING = "spring",
    FALL_SPRING = "fallSpring",
}
