import { useRoutes } from "react-router-dom";
import { Main, Page1, Page2, Notfound } from "./pages";
import Layout from "./Layout";

const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                },
                {
                    path: '/main',
                    element: <Main />,
                },
                {
                    path: '/page1',
                    element: <Page1 />,
                },
                {
                    path: '/page2',
                    element: <Page2 />,
                },
            ],
        },
        {path: '*', element: <Notfound />},
    ]);
};

export default AppRoutes;