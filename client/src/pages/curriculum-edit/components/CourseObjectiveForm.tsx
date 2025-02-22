import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { ContributionLevel, ProgramOutcome, CourseCategory } from '../../../types/course';

export default function CourseObjectiveForm() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);
    console.log(course);

    const handleOutcomeChange = (index: number, field: keyof ProgramOutcome, value: string | ContributionLevel | null) => {
        const newOutcomes = [...course.outcomes];
        newOutcomes[index] = {
            ...newOutcomes[index],
            [field]: value
        };
        dispatch(updateCourse({ outcomes: newOutcomes }));
    };

    const categories: { value: CourseCategory; label: string }[] = [
        { value: 'basic', label: t('course.categories.basic') },
        { value: 'expertise', label: t('course.categories.expertise') },
        { value: 'support', label: t('course.categories.support') },
        { value: 'communication', label: t('course.categories.communication') },
        { value: 'transferable', label: t('course.categories.transferable') }
    ];

    return (
        <div>
            {/* Dersin Amacı */}
            <div className="mb-6">
                <div className="font-normal text-base mb-2">{t('course.purpose')}</div>
                <textarea
                    value={course.purpose}
                    onChange={(e) => dispatch(updateCourse({ purpose: e.target.value }))}
                    className="w-full border border-gray-300 p-2 resize-none"
                    rows={3}
                    placeholder={t('common.select')}
                />
                <div className="mt-3 text-sm">{t('course.outcomes.title')}</div>
            </div>

            {/* Program Çıktıları Tablosu */}
            <div className="mb-6">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left w-16 text-sm font-normal">{t('course.outcomes.number')}</th>
                            <th className="border border-gray-300 p-2 text-left text-sm font-normal">{t('course.outcomes.content')}</th>
                            <th className="border border-gray-300 p-2 text-left w-20 text-sm font-normal">{t('course.outcomes.programAlternative')}</th>
                            <th className="border border-gray-300 p-2 text-center text-sm font-normal" colSpan={5}>{t('course.outcomes.contributionLevel')}</th>
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
                        {Array.from({ length: 8 }).map((_, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2 text-sm">ÖÇ {index + 1}</td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="text"
                                        value={course.outcomes[index]?.content || ''}
                                        onChange={(e) => handleOutcomeChange(index, 'content', e.target.value)}
                                        className="w-full text-sm focus:outline-none"
                                        placeholder={t('common.select')}
                                    />
                                </td>
                                <td className="border border-gray-300 p-2 text-center text-sm">{t('common.select')}</td>
                                {[1, 2, 3, 4, 5].map((level) => (
                                    <td key={level} className="border border-gray-300 p-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={course.outcomes[index]?.contributionLevel === level}
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

            {/* Ders Tanımı */}
            <div className="flex items-center gap-4">
                <div className="font-normal text-base">{t('course.description')}</div>
                <textarea
                    value={course.description}
                    onChange={(e) => dispatch(updateCourse({ description: e.target.value }))}
                    className="flex-1 border border-gray-300 p-2 resize-none"
                    rows={3}
                    placeholder={t('common.select')}
                />
            </div>

            {/* Dersin Kategorisi */}
            <div className="border border-gray-300 mt-5">
                <div className="flex">
                    <div className="w-48 py-4 px-5 font-medium text-sm border-r border-gray-300">
                        {t('course.categoryTitle')}
                    </div>
                    <div className="flex-1">
                        {categories.map((category) => (
                            <div key={category.value} className="flex justify-between items-center py-2 px-5 border-b last:border-b-0 border-gray-300">
                                <span className="text-sm">{category.label}</span>
                                <input
                                    type="checkbox"
                                    id={`category-${category.value}`}
                                    checked={course.category === category.value}
                                    onChange={() => dispatch(updateCourse({ category: course.category === category.value ? null : category.value }))}
                                    className="h-4 w-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
