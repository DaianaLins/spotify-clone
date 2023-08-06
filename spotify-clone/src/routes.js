import React, { Fragment } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes;