export interface Course {
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
  relatedSustainableDevelopmentGoals?: string;
  courseDescription: string;
}

export enum CourseFields {
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
