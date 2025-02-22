import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { CourseType, DeliveryType, Language, CourseLevel, Course } from '../../../types/course';

export default function CourseDetailsForm() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);

    const handleInputChange = (field: keyof Course, value: Course[keyof Course]) => {
        dispatch(updateCourse({ [field]: value }));
    };

    return (
        <div className="w-full">
            {/* Ders Adı */}
            <div className="flex items-center border border-gray-300">
                <div className="p-2 font-bold bg-white whitespace-nowrap">{t('course.name')}</div>
                <input
                    type="text"
                    value={course.name}
                    onChange={(e) => handleInputChange('name', e.target.value as Course['name'])}
                    className="w-full p-2 border-l border-gray-300"
                />
            </div>

            {/* Temel Bilgiler Grid */}
            <div className="grid grid-cols-6 border-x border border-gray-300 mt-5">
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{t('course.code')}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{t('course.semester')}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{t('course.theory')}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{t('course.practice')}</div>
                <div className="border-r border-gray-300 p-2 font-bold bg-white">{t('course.localCredit')}</div>
                <div className="p-2 font-bold bg-white">{t('course.ects')}</div>
            </div>

            <div className="grid grid-cols-6 border-x border-b border-gray-300">
                <div className="border-r border-gray-300">
                    <input
                        type="text"
                        value={course.code}
                        onChange={(e) => handleInputChange('code', e.target.value as Course['code'])}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <select
                        value={course.semester}
                        onChange={(e) => handleInputChange('semester', e.target.value as Course['semester'])}
                        className="w-full p-2"
                    >
                        <option value="">{t('common.select')}</option>
                        <option value="fall">{t('semesters.fall')}</option>
                        <option value="spring">{t('semesters.spring')}</option>
                        <option value="fallSpring">{t('semesters.fallSpring')}</option>
                    </select>
                </div>
                <div className="border-r border-gray-300">
                    <input
                        type="number"
                        value={course.theory}
                        onChange={(e) => handleInputChange('theory', parseInt(e.target.value) as Course['theory'])}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <input
                        type="number"
                        value={course.practice}
                        onChange={(e) => handleInputChange('practice', parseInt(e.target.value) as Course['practice'])}
                        className="w-full p-2"
                    />
                </div>
                <div className="border-r border-gray-300">
                    <input
                        type="number"
                        value={course.localCredit}
                        onChange={(e) => handleInputChange('localCredit', parseInt(e.target.value) as Course['localCredit'])}
                        className="w-full p-2"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={course.ects}
                        onChange={(e) => handleInputChange('ects', parseInt(e.target.value) as Course['ects'])}
                        className="w-full p-2"
                    />
                </div>
            </div>

            {/* Diğer Alanlar */}
            <div className="border-x border border-gray-300 mt-5">
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.prerequisites')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.prerequisites?.join(', ')}
                            onChange={(e) => handleInputChange('prerequisites', e.target.value.split(',').map(item => item.trim()))}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.language')}</div>
                    <div className="p-2">
                        <select
                            value={course.language}
                            onChange={(e) => handleInputChange('language', e.target.value as Language)}
                            className="w-full"
                        >
                            <option value="">{t('common.select')}</option>
                            <option value="tr">{t('languages.tr')}</option>
                            <option value="en">{t('languages.en')}</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.type')}</div>
                    <div className="p-2">
                        <select
                            value={course.type}
                            onChange={(e) => handleInputChange('type', e.target.value as CourseType)}
                            className="w-full"
                        >
                            <option value="">{t('common.select')}</option>
                            <option value="mandatory">{t('courseTypes.mandatory')}</option>
                            <option value="elective">{t('courseTypes.elective')}</option>
                            <option value="technicalElective">{t('courseTypes.technicalElective')}</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.level')}</div>
                    <div className="p-2">
                        <select
                            value={course.level}
                            onChange={(e) => handleInputChange('level', e.target.value as CourseLevel)}
                            className="w-full"
                        >
                            <option value="">{t('common.select')}</option>
                            <option value="associateDegree">{t('courseLevels.associateDegree')}</option>
                            <option value="undergraduate">{t('courseLevels.undergraduate')}</option>
                            <option value="graduate">{t('courseLevels.graduate')}</option>
                            <option value="doctorate">{t('courseLevels.doctorate')}</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.deliveryType')}</div>
                    <div className="p-2">
                        <select
                            value={course.deliveryType}
                            onChange={(e) => handleInputChange('deliveryType', e.target.value as DeliveryType)}
                            className="w-full"
                        >
                            <option value="">{t('common.select')}</option>
                            <option value="Yüz Yüze">{t('deliveryTypes.faceToFace')}</option>
                            <option value="Online">{t('deliveryTypes.online')}</option>
                            <option value="Hibrit">{t('deliveryTypes.hybrid')}</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.teachingMethods')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.teachingMethods?.join(', ')}
                            onChange={(e) => handleInputChange('teachingMethods', e.target.value.split(',').map(item => item.trim()))}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.coordinator')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.coordinator}
                            onChange={(e) => handleInputChange('coordinator', e.target.value)}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.instructors')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.instructors?.join(', ')}
                            onChange={(e) => handleInputChange('instructors', e.target.value.split(',').map(item => item.trim()))}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.assistants')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.assistants?.join(', ')}
                            onChange={(e) => handleInputChange('assistants', e.target.value.split(',').map(item => item.trim()))}
                            className="w-full p-2"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="border-r border-gray-300 p-2 font-bold">{t('course.nationalQualificationCode')}</div>
                    <div className="p-2">
                        <input
                            type="text"
                            value={course.nationalQualificationCode}
                            onChange={(e) => handleInputChange('nationalQualificationCode', e.target.value)}
                            className="w-full p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
