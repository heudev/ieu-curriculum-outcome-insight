import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateCourse } from '../../../store/slices/courseSlice';
import { useTranslation } from 'react-i18next';
import { EctsWorkload } from '../../../types/course';

export default function EctsWorkLoadForm() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.course);

    const handleWorkloadChange = (index: number, field: keyof EctsWorkload, value: number) => {
        const newWorkload = [...course.ectsWorkload];
        newWorkload[index] = {
            ...newWorkload[index],
            [field]: value,
            totalWorkload: field === 'quantity' ? value * newWorkload[index].duration : field === 'duration' ? value * newWorkload[index].quantity : newWorkload[index].totalWorkload
        };
        dispatch(updateCourse({ ectsWorkload: newWorkload }));
    };

    const calculateTotalWorkload = (): number => {
        return course.ectsWorkload.reduce((sum, item) => sum + item.totalWorkload, 0);
    };

    return (
        <div className="space-y-4">
            <div className="bg-[#FF9933] text-white p-2">
                {t('ectsWorkload.title', 'ECTS / WORKLOAD TABLE')}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left bg-white text-black font-normal">{t('ectsWorkload.semesterActivities', 'Semester Activities')}</th>
                            <th className="border border-gray-300 p-2 text-center bg-white text-black font-normal w-32">{t('ectsWorkload.number', 'Number')}</th>
                            <th className="border border-gray-300 p-2 text-center bg-white text-black font-normal w-32">{t('ectsWorkload.duration', 'Duration (Hours)')}</th>
                            <th className="border border-gray-300 p-2 text-center bg-white text-black font-normal w-32">{t('ectsWorkload.totalWorkload', 'Total Workload')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.ectsWorkload.map((workload, index) => (
                            <tr key={index} className="bg-white">
                                <td className="border border-gray-300 p-2 text-black">{t(`ectsWorkload.activities.${workload.activity}`, workload.activity)}</td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="number"
                                        value={workload.quantity}
                                        onChange={(e) => handleWorkloadChange(index, 'quantity', Number(e.target.value))}
                                        className="w-full text-center bg-white text-black"
                                        min="0"
                                        aria-label={t('ectsWorkload.number', 'Number')}
                                    />
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="number"
                                        value={workload.duration}
                                        onChange={(e) => handleWorkloadChange(index, 'duration', Number(e.target.value))}
                                        className="w-full text-center bg-white text-black"
                                        min="0"
                                        aria-label={t('ectsWorkload.duration', 'Duration')}
                                    />
                                </td>
                                <td className="border border-gray-300 p-2 text-center text-black">{workload.totalWorkload}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="border border-gray-300 p-2 text-right text-[#FF9933] font-bold">{t('ectsWorkload.total', 'Total')}</td>
                            <td className="border border-gray-300 p-2 text-center text-black">{calculateTotalWorkload()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
