export type Language = 'tr' | 'en';

export type SemesterType = 'fall' | 'spring' | 'fallSpring';

export type CourseType = 'mandatory' | 'elective' | 'technicalElective';

export type CourseLevel = 'associateDegree' | 'undergraduate' | 'graduate' | 'doctorate';

export type DeliveryType = 'faceToFace' | 'online' | 'hybrid';

export type ContributionLevel = 1 | 2 | 3 | 4 | 5;

export type PY = string;
export type PYAlt = string;

export interface ProgramOutcome {
    id: number;
    content: string;
    programAlternative: string;
    contributionLevel: ContributionLevel | null;
    py?: PY;
    pyAlt?: PYAlt;
}

export type CourseCategory = 'basic' | 'expertise' | 'support' | 'communication' | 'transferable' | null;

export interface WeeklyTopic {
    topics: string;
    preparation: string;
    learningOutcomes: string;
}

export interface SemesterActivity {
    id: number;
    name: string;
    quantity: number;
    contribution: number;
    learningOutcomes: number[];
}

export interface EctsWorkload {
    activity: string;
    quantity: number;
    duration: number;
    totalWorkload: number;
}

export interface EvaluationSystem {
    activities: SemesterActivity[];
    midtermContribution: number;
    finalContribution: number;
    leftColumn: number;
    rightColumn: number;
}

export interface Course {
    name: string;
    code: string;
    semester: SemesterType;
    theory: number;
    practice: number;
    localCredit: number;
    ects: number;
    prerequisites: string[];
    language: Language;
    type: CourseType;
    level: CourseLevel;
    deliveryType: DeliveryType;
    teachingMethods: string[];
    coordinator: string;
    instructors: string[];
    assistants: string[];
    nationalQualificationCode: string;
    purpose: string;
    description: string;
    outcomes: ProgramOutcome[];
    category: CourseCategory;
    weeklyTopics: WeeklyTopic[];
    evaluationSystem: EvaluationSystem;
    ectsWorkload: EctsWorkload[];
    textbook: string;
    suggestedReadings: string;
}