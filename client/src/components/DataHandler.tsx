import { t } from "i18next";

export default function DataHandler() {

    return (
        <button
            type={"submit"}
            className="bg-[#FF9933] text-white px-4 py-2 rounded-md w-full"
        >
            {t('course.save', 'Save')}
        </button>
    );
} 