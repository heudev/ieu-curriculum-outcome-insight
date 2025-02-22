import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { WeeklyTopic } from '../../../types/course';

export default function WeeklyTopicsForm() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);

    const handleTopicChange = (weekIndex: number, field: keyof WeeklyTopic, value: string) => {
        const newWeeklyTopics = [...course.weeklyTopics];
        newWeeklyTopics[weekIndex] = {
            ...newWeeklyTopics[weekIndex],
            [field]: value
        };
        dispatch(updateCourse({ weeklyTopics: newWeeklyTopics }));
    };

    return (
        <div className="space-y-4">
            <div className="bg-[#FF9838] text-white p-2 font-semibold">
                {t('course.weeklyTopics.title')}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left w-20 bg-white">{t('course.weeklyTopics.week')}</th>
                            <th className="border border-gray-300 p-2 text-left bg-white">{t('course.weeklyTopics.topics')}</th>
                            <th className="border border-gray-300 p-2 text-left bg-white">{t('course.weeklyTopics.preparation')}</th>
                            <th className="border border-gray-300 p-2 text-left bg-white">{t('course.weeklyTopics.learningOutcomes')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 16 }, (_, i) => i + 1).map((week) => (
                            <tr key={week} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2 text-gray-700">{week}</td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center">
                                        <textarea
                                            value={course.weeklyTopics[week - 1]?.topics || ''}
                                            onChange={(e) => handleTopicChange(week - 1, 'topics', e.target.value)}
                                            className="w-full bg-transparent resize-none min-h-[40px] focus:outline-none"
                                            rows={1}
                                        />
                                        <button className="ml-2 text-gray-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center">
                                        <textarea
                                            value={course.weeklyTopics[week - 1]?.preparation || ''}
                                            onChange={(e) => handleTopicChange(week - 1, 'preparation', e.target.value)}
                                            className="w-full bg-transparent resize-none min-h-[40px] focus:outline-none"
                                            rows={1}
                                        />
                                        <button className="ml-2 text-gray-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center">
                                        <textarea
                                            value={course.weeklyTopics[week - 1]?.learningOutcomes || ''}
                                            onChange={(e) => handleTopicChange(week - 1, 'learningOutcomes', e.target.value)}
                                            className="w-full bg-transparent resize-none min-h-[40px] focus:outline-none"
                                            rows={1}
                                        />
                                        <button className="ml-2 text-gray-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Course Notes/Textbooks */}
            <div className="border-t border-gray-300 mt-8">
                <div className="text-base font-semibold p-2">{t('course.textbook')}</div>
                <div className="flex items-center p-2 border border-gray-300 bg-white">
                    <textarea
                        value={course.textbook}
                        onChange={(e) => dispatch(updateCourse({ textbook: e.target.value }))}
                        className="w-full bg-transparent resize-none min-h-[40px] focus:outline-none"
                        rows={1}
                    />
                    <button className="ml-2 text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Suggested Readings/Materials */}
            <div className="border-t border-gray-300">
                <div className="text-base font-semibold p-2">{t('course.suggestedReadings')}</div>
                <div className="flex items-center p-2 border border-gray-300 bg-white">
                    <textarea
                        value={course.suggestedReadings}
                        onChange={(e) => dispatch(updateCourse({ suggestedReadings: e.target.value }))}
                        className="w-full bg-transparent resize-none min-h-[40px] focus:outline-none"
                        rows={1}
                    />
                    <button className="ml-2 text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
