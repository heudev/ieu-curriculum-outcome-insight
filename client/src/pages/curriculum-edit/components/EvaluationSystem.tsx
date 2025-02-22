import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { SemesterActivity } from '../../../types/course';

export default function EvaluationSystem() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);

    const handleActivityChange = (index: number, field: keyof SemesterActivity, value: number | number[]) => {
        const newActivities = [...course.evaluationSystem.activities];
        newActivities[index] = {
            ...newActivities[index],
            [field]: value
        };
        dispatch(updateCourse({
            evaluationSystem: {
                ...course.evaluationSystem,
                activities: newActivities
            }
        }));
    };

    const handleContributionChange = (field: 'midtermContribution' | 'finalContribution' | 'leftColumn' | 'rightColumn', value: number) => {
        dispatch(updateCourse({
            evaluationSystem: {
                ...course.evaluationSystem,
                [field]: value
            }
        }));
    };

    const calculateTotal = (field: 'quantity' | 'contribution'): number => {
        return course.evaluationSystem.activities.reduce((sum, activity) => sum + activity[field], 0);
    };

    return (
        <div className="w-full">
            <div className="bg-[#F5A623] text-white p-3 font-semibold">
                {t('evaluation.title')}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">{t('evaluation.semesterActivities')}</th>
                            <th className="border border-gray-300 p-2 text-left w-32">{t('evaluation.quantity')}</th>
                            <th className="border border-gray-300 p-2 text-left w-32">{t('evaluation.contributionLevel')}</th>
                            {Array.from({ length: 8 }, (_, i) => (
                                <th key={i} className="border border-gray-300 p-2 text-center w-16">
                                    {t('evaluation.learningOutcome')} {i + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {course.evaluationSystem.activities.map((activity, index) => (
                            <tr key={activity.id}>
                                <td className="border border-gray-300 p-2">
                                    {t(`evaluation.activities.${Object.keys(t('evaluation.activities', { returnObjects: true }))[index]}`)}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="number"
                                        value={activity.quantity}
                                        onChange={(e) => handleActivityChange(index, 'quantity', Number(e.target.value))}
                                        className="w-full bg-white border border-gray-200 p-1"
                                        min="0"
                                    />
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="number"
                                        value={activity.contribution}
                                        onChange={(e) => handleActivityChange(index, 'contribution', Number(e.target.value))}
                                        className="w-full bg-white border border-gray-200 p-1"
                                        min="0"
                                    />
                                </td>
                                {Array.from({ length: 8 }, (_, i) => (
                                    <td key={i} className="border border-gray-300 p-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={activity.learningOutcomes.includes(i + 1)}
                                            onChange={(e) => {
                                                const newOutcomes = e.target.checked
                                                    ? [...activity.learningOutcomes, i + 1]
                                                    : activity.learningOutcomes.filter(o => o !== i + 1);
                                                handleActivityChange(index, 'learningOutcomes', newOutcomes);
                                            }}
                                            className="h-4 w-4"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr>
                            <td className="border border-gray-300 p-2 font-semibold text-[#F5A623]">{t('evaluation.total')}</td>
                            <td className="border border-gray-300 p-2">{calculateTotal('quantity')}</td>
                            <td className="border border-gray-300 p-2">{calculateTotal('contribution')}</td>
                            {Array.from({ length: 8 }, (_, i) => (
                                <td key={i} className="border border-gray-300 p-2 text-center">-</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-4">
                <table className="w-full border-collapse">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2 w-3/4">{t('evaluation.midtermContribution')}</td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="number"
                                    value={course.evaluationSystem.midtermContribution}
                                    onChange={(e) => handleContributionChange('midtermContribution', Number(e.target.value))}
                                    className="w-full bg-white border border-gray-200 p-1"
                                    min="0"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="number"
                                    value={course.evaluationSystem.leftColumn}
                                    onChange={(e) => handleContributionChange('leftColumn', Number(e.target.value))}
                                    className="w-full bg-white border border-gray-200 p-1"
                                    min="0"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">{t('evaluation.finalContribution')}</td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="number"
                                    value={course.evaluationSystem.finalContribution}
                                    onChange={(e) => handleContributionChange('finalContribution', Number(e.target.value))}
                                    className="w-full bg-white border border-gray-200 p-1"
                                    min="0"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="number"
                                    value={course.evaluationSystem.rightColumn}
                                    onChange={(e) => handleContributionChange('rightColumn', Number(e.target.value))}
                                    className="w-full bg-white border border-gray-200 p-1"
                                    min="0"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2 font-semibold text-[#F5A623]">{t('evaluation.total')}</td>
                            <td className="border border-gray-300 p-2">{course.evaluationSystem.midtermContribution + course.evaluationSystem.finalContribution}</td>
                            <td className="border border-gray-300 p-2">{course.evaluationSystem.leftColumn + course.evaluationSystem.rightColumn}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
