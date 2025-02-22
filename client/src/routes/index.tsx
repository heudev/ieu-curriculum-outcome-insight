import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Outcomes from "../pages/outcomes";
import CurriculumEdit from "../pages/curriculum-edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <CurriculumEdit />,
            },
            {
                path: "curriculum-edit",
                element: <CurriculumEdit />,
            },
            {
                path: "outcomes",
                element: <Outcomes />,
            },
        ],
    },
]);

export default router;