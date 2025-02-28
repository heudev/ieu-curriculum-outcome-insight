import CourseDetails from "./components/CourseDetails.tsx";
import {Formik, Form} from "formik";
import {ISyllabusForm} from "../../types/constants.ts";
import * as Yup from "yup";
import DataHandler from "../../components/DataHandler.tsx";
import ProgramOutcomeTable from "../form-edit/components/ProgramOutcomeTable.tsx";
import PopupForm from "../curriculum-edit/PopupForm.tsx";

// TODO: PLEASE ADD SPLIT STRUCTURE FOR ARRAY FIELDS
const initialValues: ISyllabusForm = {
    course:{
        name: "",
        code: "",
        semester: "",
        theoryHoursPerWeek: 0,
        practiceLabHoursPerWeek: 0,
        localCredit: 0,
        ects: 0,
        prerequisites: [],
        language: "",
        type: "",
        level: "",
        deliveryType: "",
        teachingMethods: [""],
        coordinator: [""],
        instructors: [""],
        assistants: [""],
        nationalQualificationCode: "",
        courseObjective: "",
        learningOutcome: {
            courseId: 0,
            order: 0,
            content: "",
            pcSub: 0,
            contributionLevel: 0,
        },
        relatedSustainableDevelopmentGoals: "",
        courseDescription: "",
    },
    weeklySubject: {
        courseId: 0,
        learningOutcomeId: 0,
        week: 0,
        subjects:  "",
        relatedPreparation:  "",
        courseNotes: [],
        suggestedReadings: [],
    },
    evaluationSystem: {
        courseId: 0,
        semesterActivities: "",
        number: 0,
        weighting: 0,
        semesterActivityCount: 0,
        semesterActivityWeight: 0,
        endOfSemesterActivityCount: 0,
        endOfSemesterActivityWeight: 0,
        LO_1: false,
        LO_2: false,
        LO_3: false,
        LO_4: false,
        LO_5: false,
    },
    workloadTable: {
        courseId: 0,
        semesterActivities: "",
        number: 0,
        duration: 0,
        workload: 0,
    },
    programOutcome: {
        courseId:  0,
        programCompetencies:  "",
        contributionLevel:  0,
        order:  0,
    }
};

// TODO: validation and validation translations must be added (please use enum or interface)
const validationSchema = Yup.object({
    course: Yup.object({
        name: Yup.string().required("errors.required_course_name"),
        code: Yup.string().required("errors.required_course_code"),
        semester: Yup.string().required("errors.required_semester"),
        theoryHoursPerWeek: Yup.number()
            .min(0, "errors.required_min_theory_hours")
            .required("errors.required_theory_hours"),
        practiceLabHoursPerWeek: Yup.number()
            .min(0, "errors.required_min_practice_lab_hours")
            .required("errors.required_practice_lab_hours"),
        localCredit: Yup.number()
            .min(1, "errors.required_min_local_credit")
            .required("errors.required_local_credit"),
        ects: Yup.number()
            .min(1, "errors.required_min_ects")
            .required("errors.required_ects"),
        prerequisites: Yup.array().of(Yup.string().required("errors.required_prerequisites")), //TODO: fix
        language: Yup.string().required("errors.required_language"),
        type: Yup.string().required("errors.required_type"),
        level: Yup.string().required("errors.required_level"),
        deliveryType: Yup.string().required("errors.required_delivery_type"),
        teachingMethods: Yup.array().of(Yup.string().required("errors.required_teaching_methods")),
        coordinator: Yup.array().of(Yup.string().required("errors.required_coordinator")), //TODO: fix
        instructors: Yup.array().of(Yup.string().required("errors.required_instructors")), //TODO: fix
        assistants: Yup.array().of(Yup.string().required("errors.required_assistants")), //TODO: fix
        nationalQualificationCode: Yup.string().required("errors.required_national_qualification_code"),
        courseObjective: Yup.string().required("errors.required_course_objective"),
        learningOutcome: Yup.object({
            courseId: Yup.number().required("errors.required_learning_outcome_course_id"),
            order: Yup.number().required("errors.required_learning_outcome_order"),
            content: Yup.string().required("errors.required_learning_outcome_content"),
            pcSub: Yup.number(),
            contributionLevel: Yup.number().min(0).max(5, "errors.required_contribution_level"),
        }),
        relatedSustainableDevelopmentGoals: Yup.string(),
        courseDescription: Yup.string().required("errors.required_course_description"),
    }),
});


// TODO: dispatch the form to backend
const handleSubmit = async (values:ISyllabusForm) => {
    console.log('values',values);
    alert("Form Gönderildi!");
};


const SyllabusForm = () => {
    return (
        <div className="mt-5 space-y-4 px-30">
            <PopupForm />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form className="course-form">
                        <CourseDetails/>
                         <ProgramOutcomeTable />
                        <DataHandler />
                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default SyllabusForm;
