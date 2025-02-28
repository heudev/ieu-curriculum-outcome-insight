import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Outcomes from "../pages/outcomes";
import SyllabusForm from "../pages/form-edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <SyllabusForm />,
            },
            {
                path: "curriculum-edit",
                element: <SyllabusForm />,
            },
            {
                path: "outcomes",
                element: <Outcomes />,
            },
        ],
    },
]);

export default router;