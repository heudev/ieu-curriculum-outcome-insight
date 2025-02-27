import {ErrorMessage, Field, useFormikContext} from "formik";
import {ECourse, ISyllabusForm, ECommon, ESemesters} from "../../../types/constants.ts";
import {useTranslation} from "react-i18next";


const CourseDetails = () => {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {touched, errors} = useFormikContext<ISyllabusForm>();
    const {t} = useTranslation();

    return (
        <div className="w-full">
            <div className="flex items-center border border-gray-300">
                <label className="p-2 font-bold bg-white whitespace-nowrap"
                       htmlFor={ECourse.NAME}>{t('course.name')}</label>
                <Field
                    type="text"
                    name={`course.${ECourse.NAME}`}
                    className="w-full p-2 border-l border-gray-300"
                />
            </div>
            <ErrorMessage
                 name={`course.${ECourse.NAME}`}
                component="div"
                className="text-red-500 text-sm mt-1"
            />
            <div className="grid grid-cols-6 border-x border border-gray-300 mt-5">
                <div
                    className="border-r border-gray-300 p-2 font-bold bg-white">{t(`course.${ECourse.CODE}`)}</div>
                <div
                    className="border-r border-gray-300 p-2 font-bold bg-white">{t(`course.${ECourse.SEMESTER}`)}</div>
                <div
                    className="border-r border-gray-300 p-2 font-bold bg-white">{t(`course.${ECourse.THEORY_HOURS}`)}</div>
                <div
                    className="border-r border-gray-300 p-2 font-bold bg-white">{t(`course.${ECourse.PRACTICE_HOURS}`)}</div>
                <div
                    className="border-r border-gray-300 p-2 font-bold bg-white">{t(`course.${ECourse.LOCAL_CREDIT}`)}</div>
                <div className="p-2 font-bold bg-white">{t(`course.${ECourse.ECTS}`)}</div>
            </div>

            <div className="grid grid-cols-6 border-x border-b border-gray-300">
                <div className="border-r border-gray-300">
                    <Field
                        type="text"
                        name={`course.${ECourse.CODE}`}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <Field
                        name={`course.${ECourse.SEMESTER}`}
                        className="w-full p-2"
                        as="select"
                    >
                        <option value="">{t(`common.${ECommon.SELECT}`)}</option>
                        <option value="fall">{t(`semesters.${ESemesters.FALL}`)}</option>
                        <option value="spring">{t(`semesters.${ESemesters.SPRING}`)}</option>
                        <option value="fallSpring">{t(`semesters.${ESemesters.FALL_SPRING}`)}</option>
                    </Field>
                </div>
                <div className="border-r border-gray-300">
                    <Field
                        type="number"
                        name={`course.${ECourse.THEORY_HOURS}`}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <Field
                        type="number"
                        name={`course.${ECourse.PRACTICE_HOURS}`}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <Field
                        type="number"
                        name={`course.${ECourse.LOCAL_CREDIT}`}
                        className="w-full p-2"
                    />
                </div>
                <div>
                    <Field
                        type="number"
                        name={`course.${ECourse.ECTS}`}
                        className="w-full p-2"
                    />
                </div>
            </div>

            <div className="border-x border border-gray-300 mt-5">
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.PREREQUISITES}`)}</div>
                    <div className="p-2">
                        <Field
                            type="text"
                            name={`course.${ECourse.PREREQUISITES}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.LANGUAGE}`)}</div>
                    <div className="p-2">
                        <Field as="select"
                            name={`course.${ECourse.LANGUAGE}`}
                            className="w-full"
                        >
                            <option value="">{t(`course.${ECommon.SELECT}`)}</option>
                            <option value="tr">{t('languages.tr')}</option> // TODO: MAKE IT ENUM
                            <option value="en">{t('languages.en')}</option> // TODO: MAKE IT ENUM
                        </Field>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.TYPE}`)}</div>
                    <div className="p-2">
                        <Field as="select"
                            name={`course.${ECourse.TYPE}`}
                            className="w-full"
                        >
                            <option value="">{t(`course.${ECommon.SELECT}`)}</option>
                            <option value="mandatory">{t('courseTypes.mandatory')}</option> // TODO: MAKE IT ENUM
                            <option value="elective">{t('courseTypes.elective')}</option> // TODO: MAKE IT ENUM
                            <option value="technicalElective">{t('courseTypes.technicalElective')}</option> // TODO: MAKE IT ENUM
                        </Field>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.LEVEL}`)}</div>
                    <div className="p-2">
                        <Field as="select"
                            name={`course.${ECourse.LEVEL}`}
                            className="w-full"
                        >
                            <option value="">{t(`course.${ECommon.SELECT}`)}</option>
                            <option value="associateDegree">{t('courseLevels.associateDegree')}</option> // TODO: MAKE IT ENUM
                            <option value="undergraduate">{t('courseLevels.undergraduate')}</option> // TODO: MAKE IT ENUM
                            <option value="graduate">{t('courseLevels.graduate')}</option> // TODO: MAKE IT ENUM
                            <option value="doctorate">{t('courseLevels.doctorate')}</option> // TODO: MAKE IT ENUM
                        </Field>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.DELIVERY_TYPE}`)}</div>
                    <div className="p-2">
                        <Field as="select"
                            name={`course.${ECourse.DELIVERY_TYPE}`}
                            className="w-full"
                        >
                            <option value="">{t(`course.${ECommon.SELECT}`)}</option>
                            <option value="Yüz Yüze">{t('deliveryTypes.faceToFace')}</option> // TODO: MAKE IT ENUM
                            <option value="Online">{t('deliveryTypes.online')}</option> // TODO: MAKE IT ENUM
                            <option value="Hibrit">{t('deliveryTypes.hybrid')}</option> // TODO: MAKE IT ENUM
                        </Field>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.TEACHING_METHODS}`)}</div>
                    <div className="p-2">
                        <Field
                            type="text"
                            name={`course.${ECourse.TEACHING_METHODS}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.COORDINATOR}`)}</div>
                    <div className="p-2">
                        <Field
                            type="text"
                            name={`course.${ECourse.COORDINATOR}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.INSTRUCTORS}`)}</div>
                    <div className="p-2">
                        <Field
                            type="text"
                            name={`course.${ECourse.INSTRUCTORS}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.ASSISTANTS}`)}</div>
                    <div className="p-2">
                        <Field
                            type="text"
                            name={`course.${ECourse.ASSISTANTS}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div
                        className="border-r border-gray-300 p-2 font-bold">{t(`course.${ECourse.NATIONAL_QUALIFICATION_CODE}`)}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            name={`course.${ECourse.NATIONAL_QUALIFICATION_CODE}`}
                            className="w-full p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
