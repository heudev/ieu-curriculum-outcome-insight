import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { ContributionLevel, ProgramOutcome } from '../../../types/course';

export default function ProgramOutcomeTable() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);

    const handleOutcomeChange = (index: number, field: keyof ProgramOutcome, value: string | ContributionLevel | null) => {
        const newOutcomes = [...course.outcomes];
        newOutcomes[index] = {
            ...newOutcomes[index],
            [field]: value
        };
        dispatch(updateCourse({ outcomes: newOutcomes }));
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-orange-400 text-white">
                        <th className="border border-gray-300 p-2 text-left w-16 text-sm font-normal">{t('programOutcome.py')}</th>
                        <th className="border border-gray-300 p-2 text-left w-20 text-sm font-normal">{t('programOutcome.pyAlt')}</th>
                        <th className="border border-gray-300 p-2 text-left text-sm font-normal">{t('programOutcome.content')}</th>
                        <th className="border border-gray-300 p-2 text-center text-sm font-normal" colSpan={5}>{t('programOutcome.contributionLevel')}</th>
                    </tr>
                    <tr>
                        <th className="border border-gray-300 p-2" colSpan={3}></th>
                        <th className="border border-gray-300 p-2 text-center w-12 text-sm font-normal">1</th>
                        <th className="border border-gray-300 p-2 text-center w-12 text-sm font-normal">2</th>
                        <th className="border border-gray-300 p-2 text-center w-12 text-sm font-normal">3</th>
                        <th className="border border-gray-300 p-2 text-center w-12 text-sm font-normal">4</th>
                        <th className="border border-gray-300 p-2 text-center w-12 text-sm font-normal">5</th>
                    </tr>
                </thead>
                <tbody>
                    {course.outcomes.map((outcome, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2 text-sm">
                                <input
                                    type="text"
                                    value={outcome.py || ''}
                                    onChange={(e) => handleOutcomeChange(index, 'py', e.target.value)}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="text"
                                    value={outcome.pyAlt || ''}
                                    onChange={(e) => handleOutcomeChange(index, 'pyAlt', e.target.value)}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="text"
                                    value={outcome.content || ''}
                                    onChange={(e) => handleOutcomeChange(index, 'content', e.target.value)}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <td key={level} className="border border-gray-300 p-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={outcome.contributionLevel === level}
                                        onChange={(e) => handleOutcomeChange(
                                            index,
                                            'contributionLevel',
                                            e.target.checked ? level as ContributionLevel : null
                                        )}
                                        className="h-3 w-3"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
