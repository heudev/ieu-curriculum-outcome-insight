import CourseDetails from "./components/CourseDetails.tsx";
import {Formik, Form} from "formik";
import {ISyllabusForm} from "../../types/constants.ts";
import * as Yup from "yup";
import DataHandler from "../../components/DataHandler.tsx";
import ProgramOutcomeTable from "../form-edit/components/ProgramOutcomeTable.tsx";

// TODO: PLEASE ADD SPLIT STRUCTURE FOR ARRAY FIELDS
const initialValues: ISyllabusForm = {
    course:{
        name: "INITIAL NAME",
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
        teachingMethods: [],
        coordinator: [],
        instructors: [],
        assistants: [],
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
        name: Yup.string().required("Ders adı zorunludur"),
    })
});


// TODO: dispatch the form to backend
const handleSubmit = async (values:ISyllabusForm) => {
    console.log('values',values);
    alert("Form Gönderildi!");
};


const SyllabusForm = () => {
    return (
        <div className="mt-5 space-y-4 px-30">
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
