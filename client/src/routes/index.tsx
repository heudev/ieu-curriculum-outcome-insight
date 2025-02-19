import { createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Outcomes from "../pages/outcomes";
import Curriculum from "../pages/curriculum";

const router = createHashRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "curriculum",
                element: <Curriculum />,
            },
            {
                path: "outcomes",
                element: <Outcomes />,
            },
        ],
    },
]);

export default router;