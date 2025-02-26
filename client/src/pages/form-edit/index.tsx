import CourseDetails from "./components/CourseDetails.tsx";
import {Formik, Form} from "formik";
import {Course} from "../../types/my-types.ts";
import * as Yup from "yup";

const initialValues: Course = {
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
    teachingMethods: [],
    coordinator: [],
    instructors: [],
    assistants: [],
    nationalQualificationCode: "",
    courseObjective: "",
    relatedSustainableDevelopmentGoals: "",
    courseDescription: "",
};

// TODO: validation and translations must be added
const validationSchema = Yup.object({
    name: Yup.string().required("Ders adı zorunludur"),
});

const handleSubmit = async (values: Course) => {
    console.log("Form Gönderildi:", values);
};

const CourseForm = () => {
    return (
        <div className="mt-5 space-y-4 px-30">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form className="course-form">
                        <CourseDetails/>
                        <button type="submit">Gönder</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default CourseForm;
