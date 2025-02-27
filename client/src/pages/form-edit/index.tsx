import CourseDetails from "./components/CourseDetails.tsx";
import {Formik, Form} from "formik";
import {ISyllabusForm} from "../../types/constants.ts";
import * as Yup from "yup";

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
        relatedSustainableDevelopmentGoals: "",
        courseDescription: "",
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

                        <button type="submit" className="btn-submit">Gönder</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default SyllabusForm;
