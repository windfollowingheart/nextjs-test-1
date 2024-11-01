

import Layout from "../pages/Layout";
import New from "../pages/New";
import Year from "../pages/Year";
import Month from "../pages/Month";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "year",
                element: <Year/>
            },
            {
                path: "month",
                element: <Month/>
            }
        ]
    },
    {
        path: "/new",
        element: <New/>
    }
])

export default router;