import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold">
              IEU Curriculum Insight
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/curriculum-edit"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {t('navigation.curriculumEdit')}
              </Link>
              <Link
                to="/outcomes"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {t('navigation.outcomes')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">{t('common.userMenu')}</span>
              <BsPersonCircle size={35} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;