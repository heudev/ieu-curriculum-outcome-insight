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
        name: Yup.string().required("Ders adı zorunludur"),
        code: Yup.string().required("Ders kodu zorunludur"),
        semester: Yup.string().required("Dönem bilgisi zorunludur"),
        theoryHoursPerWeek: Yup.number()
            .min(0, "Teorik ders saati 0 veya daha büyük olmalıdır")
            .required("Teorik ders saati zorunludur"),
        practiceLabHoursPerWeek: Yup.number()
            .min(0, "Uygulama/Laboratuvar saati 0 veya daha büyük olmalıdır")
            .required("Uygulama/Laboratuvar saati zorunludur"),
        localCredit: Yup.number()
            .min(1, "Yerel kredi 1 veya daha büyük olmalıdır")
            .required("Yerel kredi zorunludur"),
        ects: Yup.number()
            .min(1, "ECTS 1 veya daha büyük olmalıdır")
            .required("ECTS zorunludur"),
        prerequisites: Yup.array().of(Yup.string().required("Ders onkoşulları zorunludur")), //TODO: fix
        language: Yup.string().required("Ders dili zorunludur"),
        type: Yup.string().required("Ders tipi zorunludur"),
        level: Yup.string().required("Ders seviyesi zorunludur"),
        deliveryType: Yup.string().required("Dersin işleniş türü zorunludur"),
        teachingMethods: Yup.array().of(Yup.string().required("Ders oğretim teknikleri zorunludur")),
        coordinator: Yup.array().of(Yup.string().required("Ders koordinatörü zorunludur")), //TODO: fix
        instructors: Yup.array().of(Yup.string().required("Ders instructorı zorunludur")), //TODO: fix
        assistants: Yup.array().of(Yup.string().required("Ders assistantı zorunludur")), //TODO: fix
        nationalQualificationCode: Yup.string().required("Ders ulusal yeterlilik kodu zorunludur"),
        courseObjective: Yup.string().required("Dersin amacı zorunludur"),
        learningOutcome: Yup.object({
            courseId: Yup.number().required("Course ID zorunludur"),
            order: Yup.number().required("Öğrenme çıktısı sırası zorunludur"),
            content: Yup.string().required("Öğrenme çıktısı içeriği zorunludur"),
            pcSub: Yup.number(),
            contributionLevel: Yup.number().min(0).max(5, "Katkı seviyesi 0-5 arasında olmalıdır"),
        }),
        relatedSustainableDevelopmentGoals: Yup.string(),
        courseDescription: Yup.string().required("Ders açıklaması zorunludur"),
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
