import {ErrorMessage, Field, useFormikContext} from "formik";
import {Course, CourseFields} from "../../../types/my-types.ts";
import {useTranslation} from "react-i18next";


const CourseDetails = () => {
    // @ts-ignore
    const {touched, errors} = useFormikContext<Course>();
    const {t} = useTranslation();

    return (
        <div className="w-full">
            <div className="flex items-center border border-gray-300">
                <label className="p-2 font-bold bg-white whitespace-nowrap"
                       htmlFor={CourseFields.NAME}>{t('course.name')}</label>
                <Field
                    type="text"
                    name={CourseFields.NAME}
                    className="w-full p-2 border-l border-gray-300"
                />
            </div>
            <ErrorMessage
                name={CourseFields.NAME}
                component="div"
                className="text-red-500 text-sm mt-1"
            />
            <div className="grid grid-cols-6 border-x border border-gray-300 mt-5">
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{CourseFields.CODE}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{CourseFields.SEMESTER}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{CourseFields.THEORY_HOURS}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{CourseFields.PRACTICE_HOURS}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{CourseFields.LOCAL_CREDIT}</div>
                <div className="p-2 font-bold bg-white">{CourseFields.ECTS}</div>
            </div>


        </div>
    );
};

export default CourseDetails;
