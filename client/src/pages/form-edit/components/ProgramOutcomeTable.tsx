import { useTranslation } from 'react-i18next';
import { EProgramOutcome} from "../../../types/constants.ts";
import {Field} from "formik";
import {useState} from "react";

export default function ProgramOutcomeTable() {
    const { t } = useTranslation();
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

    const handleCheckboxChange = (level: number) => {
        // Eğer aynı checkbox'a tıklanırsa kaldır, yoksa onu seç
        setSelectedLevel(prev => (prev === level ? null : level));
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
                <thead>
                <tr className="bg-orange-400 text-white">
                    <th className="border border-gray-300 p-2 text-left w-20 text-sm font-normal">{t(`programOutcome.${EProgramOutcome.ORDER}`)}</th>
                    <th className="border border-gray-300 p-2 text-left w-20 text-sm font-normal">{'PC Sub'}</th>
                    <th className="border border-gray-300 p-2 text-left text-sm font-normal">{t(`programOutcome.${EProgramOutcome.PROGRAM_COMPETENCIES}`)}</th>
                    <th className="border border-gray-300 p-2 text-center text-sm font-normal"
                        colSpan={5}>{t(`programOutcome.${EProgramOutcome.CONTRIBUTION_LEVEL}`)}</th>
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
                        <tr  >
                            <td className="border border-gray-300 p-2 text-sm">
                                <Field
                                    type="text"
                                    name={`programOutcome.${EProgramOutcome.ORDER}`}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <Field
                                    type="text"
                                    name={`programOutcome.${EProgramOutcome.PROGRAM_COMPETENCIES}`}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            <td className="border border-gray-300 p-2">
                                <Field
                                    type="text"
  n                                 name={`programOutcome.${EProgramOutcome.CONTRIBUTION_LEVEL}`}
                                    className="w-full text-sm focus:outline-none"
                                />
                            </td>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <td key={level} className="border border-gray-300 p-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedLevel === level}
                                        onChange={() => handleCheckboxChange(level)}
                                        className="h-3 w-3"
                                    />
                                </td>
                            ))}
                        </tr>

                </tbody>
            </table>
        </div>
    );
}
