import { NavLink } from "react-router-dom";
import { FaBook, FaClipboardList, FaCog, FaLifeRing, FaHome } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen pe-5 py-5">
      <h1 className="shadow-md text-2xl font-bold text-gray-700 mb-6 ps-5 pb-3 w-100">MFEOS</h1>

      <nav className="space-y-2  p-5">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <FaHome className="text-gray-600" /> Overview
        </NavLink>
        <NavLink
            to="/"
            className={({isActive}) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
            }
        >
            <FaBook className="text-gray-600"/> Curriculum Insight
        </NavLink>
        <NavLink
            to="/course-detail"
            className={({isActive}) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
            }
        >
          <FaClipboardList className="text-gray-600"/> Course Detail
        </NavLink>
        <NavLink
            to="/student-evaluation"
            className={({isActive}) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
            }
        >
          <BsFillFilePersonFill className="text-gray-600" /> Student Evaluation
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <FaCog className="text-gray-600" /> Settings
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <FaLifeRing className="text-gray-600" /> Support
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
