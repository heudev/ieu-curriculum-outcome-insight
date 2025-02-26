import { t } from "i18next";
import { store } from "../store/store";

export default function DataHandler() {

    const handleSave = () => {
        const state = store.getState().course; // Access the current course state
        alert(JSON.stringify(state, null, 2));  // Debugging alert
    };

    return (
        <button
            onClick={handleSave}
            className="bg-[#FF9933] text-white px-4 py-2 rounded-md w-full"
        >
            {t('course.save', 'Save')}
        </button>
    );
} 